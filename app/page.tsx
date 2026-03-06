'use client';

import Image from 'next/image';
import { useState } from 'react';
import MainButton from './components/main-button';
import MainMoreButton from './components/main-more-button';

export default function Home() {
  const [selectedItem, setSelectedItem] =
    useState<mainMenuItem>('notification');
  return (
    <main className="w-full flex flex-col items-center">
      <section className="w-2/3 h-fit flex items-end">
        <div className="w-24">
          <Image
            src={'/school-gakuran-couple.png'}
            alt="학생들 이미지"
            width={200}
            height={200}
            unoptimized
            className="w-48 aspect-square object-cover object-top"
          />
        </div>
        <div className="grow">
          <h1 className="text-center text-5xl font-light">
            <span className="font-black">자유</span>와{' '}
            <span className="font-black">평등</span>을 향해 나아가는{' '}
            <span className="font-black">월하고등학교</span>
          </h1>
          <h2 className="my-2 text-center text-xl/tight">
            우리학교 홈페이지 방문을 환영합니다.
          </h2>
        </div>
        <div className="w-24">
          <Image
            src={'/seifuku-sailor.png'}
            alt="세라복 이미지"
            width={200}
            height={200}
            unoptimized
          />
        </div>
      </section>
      <section className="relative w-2/3 h-[24rem]">
        <Image
          src={'/school-drone-shot.png'}
          alt="월하고등학교 드론샷"
          fill
          className="object-cover rounded-b-2xl"
        />
      </section>
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
    </main>
  );
}
