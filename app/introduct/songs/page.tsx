"use client";

import PageNavbar from "@/app/components/page-nav";
import PageTitle from "@/app/components/page-title";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  return (
    <>
      <div className="w-full relative">
        <PageNavbar path={pathname} />
      </div>
      <PageTitle>교가</PageTitle>
      <Image
        src={"/song.png"}
        alt="월하고등학교 교가"
        width={1000}
        height={1500}
        unoptimized
        className="mt-6 mx-auto"
      />
    </>
  );
}
