"use client";

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
      <PageTitle>학교현황</PageTitle>

      <section className="w-full mt-6">
        <h2 className="text-lg font-bold border-b-2 border-b-blue-500 pb-1 text-blue-900">
          유저 현황
        </h2>
        <table className="w-full text-center text-sm border-t-2 border-t-blue-500">
          <thead>
            <tr className="bg-blue-50/80 text-gray-700">
              <th className="py-2 px-3 border-b border-gray-200" rowSpan={2}>
                구분
              </th>
              <th className="py-2 px-3 border-b border-gray-200" colSpan={2}>
                유저
              </th>
              <th className="py-2 px-3 border-b border-gray-200" colSpan={2}>
                노트
              </th>
              <th className="py-2 px-3 border-b border-gray-200" rowSpan={2}>
                커스텀 에모지
              </th>
              <th className="py-2 px-3 border-b border-gray-200" rowSpan={2}>
                리액션
              </th>
              <th className="py-2 px-3 border-b border-gray-200" rowSpan={2}>
                연합 인스턴스
              </th>
            </tr>
            <tr className="bg-blue-50/80 text-gray-700">
              <th className="py-2 px-3 border-b border-gray-200">전체</th>
              <th className="py-2 px-3 border-b border-gray-200">로컬</th>
              <th className="py-2 px-3 border-b border-gray-200">전체</th>
              <th className="py-2 px-3 border-b border-gray-200">로컬</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-3 border-b border-gray-200 bg-blue-50/40">
                현원
              </td>
              <td className="py-2 px-3 border-b border-gray-200">80,295</td>
              <td className="py-2 px-3 border-b border-gray-200">120</td>
              <td className="py-2 px-3 border-b border-gray-200">1,725,325</td>
              <td className="py-2 px-3 border-b border-gray-200">221,148</td>
              <td className="py-2 px-3 border-b border-gray-200">1,759</td>
              <td className="py-2 px-3 border-b border-gray-200">441,266</td>
              <td className="py-2 px-3 border-b border-gray-200">4,764</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="w-full mt-8">
        <h2 className="text-lg font-bold border-b-2 border-b-blue-500 pb-1 text-blue-900">
          서버 현황
        </h2>
        <table className="w-full text-center text-sm mt-0 border-t-2 border-t-blue-500">
          <thead>
            <tr className="bg-blue-50/80 text-gray-700">
              <th className="py-2 px-3 border-b border-gray-200">버전</th>
              <th className="py-2 px-3 border-b border-gray-200">CPU</th>
              <th className="py-2 px-3 border-b border-gray-200">메모리</th>
              <th className="py-2 px-3 border-b border-gray-200" colSpan={2}>
                스토리지
              </th>
              <th className="py-2 px-3 border-b border-gray-200">오픈 등록</th>
            </tr>
            <tr className="bg-blue-50/80 text-gray-700">
              <th className="py-2 px-3 border-b border-gray-200"></th>
              <th className="py-2 px-3 border-b border-gray-200"></th>
              <th className="py-2 px-3 border-b border-gray-200"></th>
              <th className="py-2 px-3 border-b border-gray-200">전체</th>
              <th className="py-2 px-3 border-b border-gray-200">사용</th>
              <th className="py-2 px-3 border-b border-gray-200"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-3 border-b border-gray-200">
                2026.3.1+serafuku.2
              </td>
              <td className="py-2 px-3 border-b border-gray-200">
                Neoverse-N1 (4코어)
              </td>
              <td className="py-2 px-3 border-b border-gray-200">25.4 GB</td>
              <td className="py-2 px-3 border-b border-gray-200">192.7 GB</td>
              <td className="py-2 px-3 border-b border-gray-200">
                34.5 GB (17.9%)
              </td>
              <td className="py-2 px-3 border-b border-gray-200">O</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
