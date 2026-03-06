'use client';

import { mainMenuItem } from '@/types/main';
import { useState } from 'react';

export default function MainButton({
  name,
  children,
  isSelected,
  setSelectedName,
}: {
  name: mainMenuItem;
  children: React.ReactNode;
  isSelected: boolean;
  setSelectedName: (name: mainMenuItem) => void;
}) {
  const [isHover, setIsHover] = useState(false);
  return (
    <button
      onClick={() => setSelectedName(name)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`relative inline-flex items-center justify-center isolate ${isSelected ? 'text-rose-600 font-bold' : 'text-stone-600'}`}
    >
      <span
        className={`absolute rounded-full w-[2em] h-[2em] bg-rose-200 -z-[1] transition-transform ${isSelected ? 'scale-100' : isHover ? 'scale-75' : 'scale-0'}`}
      />
      {children}
    </button>
  );
}
