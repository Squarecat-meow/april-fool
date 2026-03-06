'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MainMoreButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link href={'/noti/notification'}>
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative inline-flex justify-end items-center gap-1"
      >
        {children}
        <div
          className={`transition-transform ${isHover ? 'translate-x-2' : 'translate-x-0'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="24"
            viewBox="0 0 48 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="2" y1="12" x2="44" y2="12" />
            <polyline points="38,6 44,12 38,18" />
          </svg>
        </div>
        <span
          className={`absolute rounded-full w-[2em] h-[2em] bg-rose-200 -z-[1] duration-200 ${isHover ? 'scale-110' : 'scale-100'}`}
        />
      </button>
    </Link>
  );
}
