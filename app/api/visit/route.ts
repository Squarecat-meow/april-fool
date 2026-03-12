import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [totalCount, todayCount] = await Promise.all([
    prisma.visit.count(),
    prisma.visit.count({
      where: { visitedAt: { gte: today } },
    }),
  ]);

  return NextResponse.json({ totalCount, todayCount });
}

export async function POST() {
  await prisma.visit.create({ data: {} });

  return NextResponse.json({ ok: true });
}
