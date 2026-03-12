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
        <Timeline.Element direction="right">
          <Timeline.Date>2023.9.3</Timeline.Date>
          <Timeline.Text>월하고등학교 개교</Timeline.Text>
        </Timeline.Element>
        <Timeline.Line />
        <Timeline.Element direction="right">
          <Timeline.Date>2024.9.3</Timeline.Date>
          <Timeline.Text>월하고등학교 1주년</Timeline.Text>
        </Timeline.Element>
        <Timeline.Line />
        <Timeline.Element direction="left">
          <Timeline.Date>2024.12.10</Timeline.Date>
          <Timeline.Text>로컬 노트 50,000개 돌파</Timeline.Text>
        </Timeline.Element>
        <Timeline.Line />
        <Timeline.Element direction="left">
          <Timeline.Date>2025.2.6</Timeline.Date>
          <Timeline.Text>로컬 노트 100,000개 돌파</Timeline.Text>
        </Timeline.Element>
        <Timeline.Line />
        <Timeline.Element direction="left">
          <Timeline.Date>2025.10.27</Timeline.Date>
          <Timeline.Text>학생 수 100명 돌파</Timeline.Text>
        </Timeline.Element>
        <Timeline.Line />
        <Timeline.Element direction="right">
          <Timeline.Date>2025.9.3</Timeline.Date>
          <Timeline.Text>월하고등학교 2주년</Timeline.Text>
        </Timeline.Element>
        <Timeline.Line />
        <Timeline.Element direction="left">
          <Timeline.Date>2026.1.12</Timeline.Date>
          <Timeline.Text>로컬 노트 200,000개 돌파</Timeline.Text>
        </Timeline.Element>
      </Timeline>
    </>
  );
}
