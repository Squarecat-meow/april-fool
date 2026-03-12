import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("category");

  if (!query) {
    return NextResponse.json({ data: [] });
  }

  const posts = await prisma.board.findMany({
    where: {
      category: query,
    },
  });

  return NextResponse.json({ data: posts });
}
