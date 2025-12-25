import CocktailCard from "@/components/CocktailCard";
import cocktailsData from "@/data/cocktails.json";
import { CocktailsData } from "@/types/cocktail";

const data = cocktailsData as CocktailsData;

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bar-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-bar-wine/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            <span className="gradient-text">Cocktail Guide</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-4">
            探索经典鸡尾酒的历史、配方与调制艺术
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto">
            从古巴的莫吉托到意大利的尼格罗尼，每一杯鸡尾酒背后都有一段迷人的故事。
            让我们一起走进这个优雅的世界。
          </p>

          {/* 装饰性分隔线 */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-bar-accent" />
            <div className="w-2 h-2 rounded-full bg-bar-accent" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-bar-accent" />
          </div>
        </div>
      </section>

      {/* Cocktails Grid */}
      <section id="classics" className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-serif font-bold text-white mb-2">
              经典配方
            </h2>
            <p className="text-gray-500">
              精选5款世界知名的经典鸡尾酒
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-gray-500 text-sm">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>点击卡片查看详细配方</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.cocktails.map((cocktail) => (
            <CocktailCard key={cocktail.id} cocktail={cocktail} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-bar-accent/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-bar-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">历史故事</h3>
              <p className="text-gray-500 text-sm">
                了解每款鸡尾酒背后的迷人历史和起源故事
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-bar-accent/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-bar-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">详细配方</h3>
              <p className="text-gray-500 text-sm">
                精确的配料用量和专业调酒师的独家技巧
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-bar-accent/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-bar-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">步骤指导</h3>
              <p className="text-gray-500 text-sm">
                一步步跟随指导，在家也能调制出完美的鸡尾酒
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
