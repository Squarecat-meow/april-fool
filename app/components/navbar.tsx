'use client';

import { navbarItems } from '@/const/navbar-items';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);
  return (
    <nav className="w-full h-12 flex justify-center bg-indigo-400 text-white">
      <ul className="w-2/3 flex justify-between items-center">
        {navbarItems.map((el) => (
          <li key={el.id}>
            <div
              className="cursor-pointer"
              onMouseEnter={() => setHoveredItem(el.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {el.name}
            </div>
            {(hoveredItem === el.id || hoveredMenu === el.id) && (
              <ul
                className="absolute min-w-36 p-2 z-[1] space-y-1 border-2 border-indigo-700 bg-white rounded-2xl"
                onMouseEnter={() => setHoveredMenu(el.id)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                {el.subcategory.map((sub) => (
                  <Link key={sub.id} href={sub.href}>
                    <li className="p-1 text-black rounded-lg hover:bg-indigo-400">
                      {sub.name}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
