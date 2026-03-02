import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-full flex justify-center">
      <section className="w-2/3 grid grid-cols-3">
        <div className="w-24">
          <Image
            src={'/school-gakuran-couple.png'}
            alt="학생들 이미지"
            width={200}
            height={200}
            unoptimized
            className="w-48 aspect-square object-cover object-top"
          />
        </div>
        <div className="w-fit">
          <h1 className="text-center text-5xl font-light">
            <span className="font-bold">자유</span>와{' '}
            <span className="font-bold">평등</span>을 향해 나아가는{' '}
            <span className="font-bold">월하고등학교</span>
          </h1>
          <h2 className="my-2 text-center text-xl">
            우리학교 홈페이지 방문을 환영합니다.
          </h2>
        </div>
      </section>
      <div className="relative h-[24rem]">
        <Image
          src={'/school-drone-shot.png'}
          alt="월하고등학교 드론샷"
          fill
          className="object-cover rounded-2xl"
        />
      </div>
    </main>
  );
}
