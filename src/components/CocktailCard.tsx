import Link from "next/link";
import Image from "next/image";
import { Cocktail } from "@/types/cocktail";

interface CocktailCardProps {
  cocktail: Cocktail;
}

export default function CocktailCard({ cocktail }: CocktailCardProps) {
  return (
    <Link href={`/cocktail/${cocktail.id}`}>
      <div className="cocktail-card group relative bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl overflow-hidden border border-gray-800 hover:border-bar-accent/50 transition-all duration-300">
        {/* 图片容器 */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={cocktail.image}
            alt={cocktail.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* 渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />

          {/* 酒精强度标签 */}
          <div
            className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
            style={{ backgroundColor: `${cocktail.color}33`, color: cocktail.color }}
          >
            {cocktail.strength}
          </div>
        </div>

        {/* 内容区域 */}
        <div className="p-6">
          {/* 标题 */}
          <h3 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-bar-accent transition-colors">
            {cocktail.name}
          </h3>
          <p className="text-gray-400 text-sm mb-3">{cocktail.nameZh}</p>

          {/* 标语 */}
          <p className="text-gray-500 text-sm italic mb-4">
            &ldquo;{cocktail.tagline}&rdquo;
          </p>

          {/* 标签 */}
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-400">
              {cocktail.origin}
            </span>
            <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-400">
              {cocktail.taste}
            </span>
          </div>

          {/* 悬停提示 */}
          <div className="mt-4 flex items-center text-bar-accent opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-sm">查看配方</span>
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        {/* 底部装饰线 */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: cocktail.color }}
        />
      </div>
    </Link>
  );
}
