"use client";

import { Board } from "@/generated/prisma/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Browser({ category }: { category: string }) {
  const [posts, setPosts] = useState<Board[]>([]);
  useEffect(() => {
    fetch(`/api/fetch-posts?category=${category}`)
      .then((res) => res.json())
      .then((res) => setPosts(res.data));
  }, [category]);
  return (
    <table className="w-full text-center border-t-2 h-16 border-blue-500 text-blue-900">
      <thead>
        <tr className="h-16 bg-blue-50/50 border-b border-b-gray-200">
          <th>번호</th>
          <th className="w-1/2">제목</th>
          <th>작성자</th>
          <th>등록일</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>
        {posts.length > 0 ? (
          posts.map((el, idx) => (
            <tr key={el.id} className="h-10 border-b border-gray-200">
              <td>{idx + 1}</td>
              <td>
                <Link key={el.id} href={`${category}/${el.id}`}>
                  {el.title}
                </Link>
              </td>
              <td>{el.author}</td>
              <td>{el.createdAt.toString().substring(0, 10)}</td>
              <td>{el.clickCount}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
