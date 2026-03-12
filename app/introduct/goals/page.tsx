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
      <PageTitle>교육목표</PageTitle>
      <Image
        src={"/goals.png"}
        alt="월하고등학교 교육목표"
        width={1000}
        height={675}
        unoptimized
        className="mt-6 mx-auto"
      />
    </>
  );
}
