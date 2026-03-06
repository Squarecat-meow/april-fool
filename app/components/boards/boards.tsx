'use client';

import { Board } from '@/generated/prisma/client';
import MainButton from '../main-button';
import MainMoreButton from '../main-more-button';
import { useState } from 'react';
import { mainMenuItem } from '@/types/main';
import BoardItem from './item';

function BoardMenu({ menu, items }: { menu: mainMenuItem; items: Board[] }) {
  const notiItems = items.filter((item) => item.category === 'notification');
  const schoolToHomeItems = items.filter(
    (item) => item.category === 'school-to-home',
  );
  switch (menu) {
    case 'notification':
      if (notiItems.length <= 0) return <h1>공지사항이 없습니다.</h1>;
      return notiItems.map((item) => <BoardItem key={item.id} item={item} />);
    case 'school-to-home':
      if (schoolToHomeItems.length <= 0) return <h1>가정통신문이 없습니다.</h1>;
      return schoolToHomeItems.map((item) => (
        <BoardItem key={item.id} item={item} />
      ));
  }
}

export default function Boards({ items }: { items: Board[] }) {
  const [selectedItem, setSelectedItem] =
    useState<mainMenuItem>('notification');
  return (
    <main className="w-full flex flex-col items-center gap-4">
      <section className="w-2/3 mt-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <MainButton
            name="notification"
            isSelected={selectedItem === 'notification' ? true : false}
            setSelectedName={setSelectedItem}
          >
            공지사항
          </MainButton>
          <div className="w-6 border-b border-b-slate-600" />
          <MainButton
            name="school-to-home"
            isSelected={selectedItem === 'school-to-home' ? true : false}
            setSelectedName={setSelectedItem}
          >
            가정통신문
          </MainButton>
        </div>
        <MainMoreButton>more</MainMoreButton>
      </section>
      <section className="w-2/3 h-fit grid grid-cols-3">
        <BoardMenu menu={selectedItem} items={items} />
      </section>
    </main>
  );
}
