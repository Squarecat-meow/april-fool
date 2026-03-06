import Image from 'next/image';

export default function PageHeader() {
  return (
    <div className="w-full h-fit pt-4 bg-blue-100">
      <section className="w-2/3 h-fit relative mx-auto flex items-center gap-2">
        <div className="w-1/2">
          <h1 className="text-4xl/tight font-light">
            <span className="font-black">자유</span>와{' '}
            <span className="font-black">평등</span>을 향해 나아가는 <br />
            <span className="font-black">월하고등학교</span>
          </h1>
          <h2 className="my-2">우리학교 홈페이지 방문을 환영합니다.</h2>
        </div>
        <Image
          src={'/school.png'}
          alt="학교 건물 이미지"
          width={200}
          height={150}
          unoptimized
          className="absolute left-1/3 -bottom-1"
        />
        <div className="relative w-1/2 h-40">
          <Image
            src={'/school-drone-shot.png'}
            alt="월하고등학교 드론샷"
            fill
            className="object-cover rounded-t-2xl"
          />
        </div>
      </section>
    </div>
  );
}
