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
          우리 학교는 학생 한 명 한 명을 소중히 여기고 학생들이 훌륭한 인격을
          갖춘 좋은 사람으로 잘 성장할 수 있도록 선생님들과 함께 최선을 다해
          교육하고 있습니다.
          <br />
          <br />
          성숙한 시민으로 성장하는데 필요한 기초학력향상 교육, 인성교육,
          독서교육을 충실히 하겠습니다.
          <br />
          즐겁고 건강한 삶을 사는데 필요한 문화예술교육, 체육교육도 열심히
          하겠습니다.
          <br />
          개개인의 적성과 소질을 기르는데 꼭 필요한 교과교육과 다양한
          진로체험교육도 알차게 하겠습니다.
          <br />
          <br />
          무엇보다 폭력 없는 학교, 안전한 학교를 만들기 위해 최선을 다
          하겠습니다. <br />
          <br />
          오늘보다 내일이 더 기대되는 학교, 더 좋은 학교, 교육공동체 구성원
          모두가 행복한 학교가 되도록 노력하겠습니다.
          <br />
          <br />
          항상 애정 어린 관심과 따뜻한 격려와 응원 부탁드립니다.
          <br />
        </p>
        <div className="text-right">월하고등학교 교육가족 일동</div>
      </section>
    </>
  );
}
