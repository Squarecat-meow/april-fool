import { navbarItems } from '@/const/navbar-items';
import { Home } from 'lucide-react';

export default function PageNavbar({ path }: { path: string }) {
  const parent = navbarItems.find((el) =>
    el.subcategory.some((el) => el.href === path),
  );
  const child = parent?.subcategory.find((el) => el.href === path);

  return (
    <nav className="w-full h-12 absolute -bottom-2 flex items-center z-[1] bg-blue-400 rounded-t-3xl">
      <button className="bg-blue-500 rounded-tl-3xl h-full w-12">
        <Home className="m-auto" color="white" size={20} />
      </button>
      <div className="h-12 py-3 flex items-center">
        <select
          defaultValue={parent?.id}
          className="m-2 w-36 flex items-center text-white"
        >
          {navbarItems.map((item) => (
            <option key={item.id} className="text-black">
              {item.name}
            </option>
          ))}
        </select>
        <div className="border-r border-r-gray-300 h-full" />
        <select
          defaultValue={child?.id}
          className="m-2 w-36 flex items-center text-white"
        >
          {parent?.subcategory.map((item) => (
            <option key={item.id} className="text-black">
              {item.name}
            </option>
          ))}
        </select>
        <div className="border-r border-r-gray-300 h-full" />
      </div>
    </nav>
  );
}
