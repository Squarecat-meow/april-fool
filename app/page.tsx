import { prisma } from "@/lib/prisma";
import Hero from "./components/hero";
import Boards from "./components/boards/boards";

export const dynamic = "force-dynamic";

export default async function Home() {
  const boardItem = await prisma.board.findMany({
    where: {
      category: "/noti/notification",
    },
  });

  return (
    <main className="w-full flex flex-col items-center">
      <Hero />
      <Boards items={boardItem} />
    </main>
  );
}
