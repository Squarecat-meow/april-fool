"use client";
import PageNavbar from "@/app/components/page-nav";
import PageTitle from "@/app/components/page-title";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-fit px-4 py-2 rounded-3xl ${className ?? ""}`}>
      {children}
    </div>
  );
}

export default function Page() {
  const pathname = usePathname();
  return (
    <>
      <div className="w-full relative">
        <PageNavbar path={pathname} />
      </div>
      <PageTitle>학교 상징</PageTitle>
      <article className="mt-6 py-6 border-2 border-t-blue-500 border-gray-200 rounded-b-3xl">
        <Title className="mx-auto mb-6 bg-blue-600 text-xl text-white font-bold">
          월하고등학교 교훈
        </Title>
        <h2 className="text-center text-xl text-gray-600 font-bold">
          큰 꿈과 높은 이상과 넓은 책상
        </h2>
      </article>
      <article className="mt-6 border-2 border-t-blue-500 border-gray-200 rounded-b-3xl">
        <Title className="mx-auto my-6 bg-blue-600 text-xl text-white font-bold">
          교표
        </Title>
        <div className="my-6 grid grid-cols-3">
          <Image
            src={"/school-mark.png"}
            alt="월하고등학교 교표"
            width={200}
            height={200}
            unoptimized
            className="m-auto"
          />
          <h2 className="my-auto col-span-2 text-gray-600">
            - 밤하늘과 별자리는 밤하늘과 별자리를 형상 <br />
            - 초승달은 달을 형상 <br />- 월계수는 월계수를 형상
          </h2>
        </div>
      </article>
      <article className="mt-6 border-2 border-t-green-500 border-gray-200 rounded-b-3xl">
        <Title className="mx-auto my-6 bg-green-600 text-xl text-white font-bold">
          교화: 백합
        </Title>
        <div className="my-6 grid grid-cols-3">
          <Image
            src={"/lily.jpg"}
            alt="월하고등학교 교표"
            width={250}
            height={250}
            unoptimized
            className="m-auto w-[200px] aspect-square rounded-2xl object-cover"
          />
          <h2 className="my-auto col-span-2 text-gray-600">
            백합은 순결, 순수한 사랑, GL을 상징
          </h2>
        </div>
      </article>
      <article className="mt-6 border-2 border-t-red-500 border-gray-200 rounded-b-3xl">
        <Title className="mx-auto my-6 bg-red-600 text-xl text-white font-bold">
          교목: 대나무
        </Title>
        <div className="my-6 grid grid-cols-3">
          <Image
            src={"/bamboo.jpg"}
            alt="월하고등학교 교표"
            width={250}
            height={250}
            unoptimized
            className="m-auto w-[200px] aspect-square rounded-2xl object-cover"
          />
          <h2 className="my-auto col-span-2 text-gray-600">
            대나무는 쭉 뻗으며 자라기 때문에 대쪽같은 취향을 상징
          </h2>
        </div>
      </article>
    </>
  );
}
