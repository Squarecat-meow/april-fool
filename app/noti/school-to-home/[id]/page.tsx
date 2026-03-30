import PageNavbar from '@/app/components/page-nav';
import PageTitle from '@/app/components/page-title';
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
      <div className="w-full relative">
        <PageNavbar path={'/noti/school-to-home'} />
      </div>
      <PageTitle>가정통신문</PageTitle>
      <div className="mt-12 border-t-2 border-blue-700" />
      <h1 className="mt-4 text-center">{pageInfo.title}</h1>
      <div className="flex justify-center gap-4 mt-4 py-4 border-y border-gray-300 bg-gray-100">
        <h2>작성자 {pageInfo.author}</h2>
        <span> | </span>
        <h2>등록일 {pageInfo.createdAt.toLocaleDateString('ko-KR')}</h2>
        <span> | </span>
        <h2>조회수 {pageInfo.clickCount}</h2>
      </div>
      <div className="whitespace-pre-wrap">
        {pageInfo.body?.replace(/\\n/g, '\n')}
      </div>
    </main>
  );
}
