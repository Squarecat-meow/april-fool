"use client";

import { useEffect, useState } from "react";

function Counter() {
  const [counts, setCounts] = useState({ totalCount: 0, todayCount: 0 });

  useEffect(() => {
    fetch("/api/visit", { method: "POST" })
      .then(() => fetch("/api/visit"))
      .then((res) => res.json())
      .then(setCounts);
  }, []);

  return (
    <div className="h-fit p-2 text-sm text-white bg-blue-500 rounded-4xl flex gap-4 justify-center">
      <p>today: {counts.todayCount}명</p>
      <span>|</span>
      <p>total: {counts.totalCount}명</p>
    </div>
  );
}

export default function Footer() {
  const list = [
    {
      id: 1,
      text: "개인정보처리방침",
      className: "text-blue-500 font-bold",
    },
    {
      id: 2,
      text: "저작권보호정책",
    },
    {
      id: 3,
      text: "이용약관",
    },
    {
      id: 4,
      text: "이메일주소무단수집거부",
    },
    {
      id: 5,
      text: "영상정보처리기기운영방침",
    },
  ];
  return (
    <footer className="w-full h-56 py-6 mt-6 border-t border-gray-200 bg-gray-100">
      <div className="w-2/3 mx-auto grid grid-cols-5">
        <div className="col-span-4">
          <ul className="text-sm flex gap-4">
            {list.map((el) => (
              <li key={el.id} className={el.className ?? "text-gray-600"}>
                {el.text}
                <span
                  className={`ml-4 text-gray-600 font-medium ${el.id === list.length ? "hidden" : "inline-block"}`}
                >
                  |
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-sm space-y-1">
            <p>쿠마모토현 츠키노시타시 히가시구 사쿠라가오카 1-3-2</p>
            <p>
              Tel : 대표번호 096-000-1212(08:40~16:40) 당직실
              096-000-3434(야간,휴일)
            </p>
            <p>Fax : 행정실 096-000-1234 교무실 096-000-5678</p>
            <p>
              Copyright © 2023 Tsukinosita Office of Education, All Rights
              Reserved.
            </p>
          </div>
        </div>
        <Counter />
      </div>
    </footer>
  );
}
