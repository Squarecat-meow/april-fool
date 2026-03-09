"use client";
import PageNavbar from "@/app/components/page-nav";
import PageTitle from "@/app/components/page-title";
import { usePathname } from "next/navigation";
import Timeline from "./components/timeline";

export default function Page() {
  const pathname = usePathname();

  return (
    <>
      <div className="w-full relative">
        <PageNavbar path={pathname} />
      </div>
      <PageTitle>학교 연혁</PageTitle>
      <Timeline className="mt-6">
        <Timeline.Element>
          <Timeline.Date>2023.9.3</Timeline.Date>
          <Timeline.Text>월하고등학교 개교</Timeline.Text>
          <Timeline.Line />
        </Timeline.Element>
        <Timeline.Element>
          <Timeline.Date>2024.9.3</Timeline.Date>
          <Timeline.Text>월하고등학교 1주년</Timeline.Text>
          <Timeline.Line />
        </Timeline.Element>
        <Timeline.Element>
          <Timeline.Date>2025.9.3</Timeline.Date>
          <Timeline.Text>월하고등학교 2주년</Timeline.Text>
        </Timeline.Element>
      </Timeline>
    </>
  );
}
