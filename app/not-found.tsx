import Image from "next/image";

export default function NotFound() {
  return (
    <section className="w-full">
      <Image
        src={"/NotFound.png"}
        alt="찾을 수 없습니다 이미지"
        width={500}
        height={294}
        unoptimized
        className="m-auto"
      />
      <p className="text-3xl text-center">🙏 페이지를 찾을 수 없습니다ㅠ</p>
    </section>
  );
}
