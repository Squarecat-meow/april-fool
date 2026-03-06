import { prisma } from '@/lib/prisma';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pageInfo = await prisma.board.findUnique({
    where: { id: parseInt(id) },
  });
  if (!pageInfo) return <h1>페이지를 찾을 수 없습니다.</h1>;
  return (
    <main>
      <h1>{pageInfo.title}</h1>
    </main>
  );
}
