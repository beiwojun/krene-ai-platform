'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface ArtworkCardProps {
  title: string;
  description: string;
  image: string;
  rotation: number;
}

export function ArtworkCard({ title, description, image, rotation }: ArtworkCardProps) {
  return (
    <div
      className="group relative"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* 主卡片 */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        {/* 图片区域 */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          {/* 悬停遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              <Button size="sm" className="flex-1 bg-white text-gray-900 hover:bg-gray-100">
                编辑
              </Button>
              <Button size="sm" className="flex-1 bg-purple-600 text-white hover:bg-purple-700">
                下载
              </Button>
            </div>
          </div>
        </div>

        {/* 信息区域 */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>

      {/* 装饰卡片（底部） */}
      <div
        className="absolute top-2 left-1 right-1 h-full bg-purple-50 rounded-2xl -z-10 opacity-50"
        style={{ transform: 'rotate(-1deg)' }}
      />
      <div
        className="absolute top-4 left-2 right-2 h-full bg-purple-100/50 rounded-2xl -z-20 opacity-30"
        style={{ transform: 'rotate(1deg)' }}
      />
    </div>
  );
}
