"use client";

import Browser from "@/app/components/browser/browser";
import Noti from "@/app/components/noti";
import PageNavbar from "@/app/components/page-nav";
import PageTitle from "@/app/components/page-title";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  return (
    <>
      <div className="w-full relative">
        <PageNavbar path={pathname} />
      </div>
      <PageTitle>월하고 언론 보도자료</PageTitle>
      <section className="mt-6">
        <Noti />
        <article>
          <Browser category={pathname} />
        </article>
      </section>
    </>
  );
}
