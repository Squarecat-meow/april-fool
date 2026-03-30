import "dotenv/config";
import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const url = new URL(process.env.POSTGRES_PRISMA_URL!);
url.searchParams.set("sslmode", "no-verify");

const pool = new Pool({
  connectionString: url.toString(),
  ssl: { rejectUnauthorized: false },
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export { prisma };
