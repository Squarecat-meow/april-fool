'use client';

import PageNavbar from '@/app/components/page-nav';
import PageTitle from '@/app/components/page-title';
import { usePathname } from 'next/navigation';

export default function Page() {
  const pathname = usePathname();
  return (
    <>
      <div className="w-full relative">
        <PageNavbar path={pathname} />
      </div>
      <PageTitle>학교장 인삿말</PageTitle>
      <section className="w-full my-6">
        <span className="text-4xl text-blue-400/50 font-black">
          G R E E T I N G
        </span>
        <div className="px-6 py-12 bg-blue-50 border-b-4 border-r-4 border-b-blue-400 border-r-blue-400 rounded-br-4xl text-2xl">
          <span className="font-black">자유</span>와{' '}
          <span className="font-black">평등</span>으로 나아가는 학교
          <br />
          <span className="font-black">월하고등학교</span> 홈페이지 방문을
          진심으로 환영합니다.
        </div>
        <p className="mt-4">
          월하고등학교에 오신 것을 환영합니다.
          <br />
          <br />
          누구든 있는 그대로의 모습으로 저희 학교에 발을 들일 수 있습니다. 서로
          다른 생각과 개성이 부딪히고 어우러지는 가운데, 우리는 함께 성장합니다.
          월하고의 복도는 언제나 따뜻하고, 교실 창문 너머로 들어오는 따스한
          햇살처럼 이 공간이 여러분께 작은 쉼터가 되길 바랍니다.
          <br />
          <br />
          빠르게 흘러가는 세상 속에서도, 월하고등학교는 여러분이 잠깐 멈춰 숨을
          고르고, 진짜 나를 찾아갈 수 있는 곳이고 싶습니다.
          <br />
          <br />
          앞으로 월하고의 모든 구성원과 함께, 자유롭고 평등한 내일을 향해
          천천히, 그러나 꾸준히 나아가겠습니다.
          <br />
          <br />
        </p>
        <div className="text-right">월하고등학교 교육가족 일동</div>
      </section>
    </>
  );
}
