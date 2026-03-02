import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const headerItems = [
    {
      id: 1,
      name: '홈',
      href: '/',
    },
    {
      id: 2,
      name: '로그인',
      href: '/login',
    },
    {
      id: 3,
      name: '회원가입',
      href: '/register',
    },
    {
      id: 4,
      name: '사이트맵',
      href: '/sitemap',
    },
  ];
  return (
    <header className="w-full flex justify-center mt-2">
      <section className="w-2/3 flex justify-between items-center">
        <Link href={'/'}>
          <div className="flex items-center gap-2">
            <div className="w-12 aspect-square">
              <Image
                src={'/school-mark.png'}
                alt="월하고등학교 마크"
                width={500}
                height={500}
                unoptimized
              />
            </div>
            <div>
              <p className="text-2xl font-black">월하고등학교</p>
              <p className="text-xs font-light tracking-[0.15em]">
                Wolha High School
              </p>
            </div>
          </div>
        </Link>
        <ul className="flex gap-2">
          {headerItems.map((el) => (
            <Link
              href={el.href}
              key={el.id}
              className="flex gap-2 items-center"
            >
              <li className="text-slate-600">
                <p>{el.name}</p>
              </li>
              {el.id < headerItems.length && (
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              )}
            </Link>
          ))}
          <div className="w-48 border-2 border-indigo-700">
            <form className="flex">
              <input type="text" placeholder="검색" className="w-full m-1" />
              <button className="bg-indigo-700 p-2">
                <Search color="white" size={16} />
              </button>
            </form>
          </div>
        </ul>
      </section>
    </header>
  );
}
