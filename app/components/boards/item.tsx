import { Board } from '@/generated/prisma/client';
import { Clock } from 'lucide-react';
import Link from 'next/link';

export default function BoardItem({
  item,
  category,
}: {
  item: Board;
  category: string;
}) {
  return (
    <Link href={`/noti/${category}/${item.id}`}>
      <div className="p-6 rounded-2xl border border-gray-300 transition-shadow shadow hover:shadow-lg">
        <h1 className="mb-2 font-bold">
          {item.title.length > 12
            ? item.title.substring(12).concat('...')
            : item.title}
        </h1>
        <p className="mb-6 text-sm text-gray-600">
          {item.body && item.body.length > 30
            ? item.body?.substring(30).concat('...')
            : item.body}
        </p>
        <div className="flex gap-2 items-center">
          <Clock size={14} className="stroke-gray-600" />
          <p className="text-sm text-gray-600">
            {item.createdAt.toLocaleDateString('ko-KR', { dateStyle: 'long' })}
          </p>
        </div>
      </div>
    </Link>
  );
}
