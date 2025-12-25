import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import cocktailsData from "@/data/cocktails.json";
import { CocktailsData } from "@/types/cocktail";

const data = cocktailsData as CocktailsData;

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return data.cocktails.map((cocktail) => ({
    id: cocktail.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const cocktail = data.cocktails.find((c) => c.id === id);

  if (!cocktail) {
    return { title: "未找到" };
  }

  return {
    title: `${cocktail.name} (${cocktail.nameZh}) | Cocktail Guide`,
    description: cocktail.history.slice(0, 160),
  };
}

export default async function CocktailPage({ params }: PageProps) {
  const { id } = await params;
  const cocktail = data.cocktails.find((c) => c.id === id);

  if (!cocktail) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src={cocktail.image}
          alt={cocktail.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bar-darker via-bar-darker/60 to-transparent" />

        {/* 返回按钮 */}
        <Link
          href="/"
          className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-bar-accent transition-colors z-10"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>返回</span>
        </Link>

        {/* 标题 */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{ backgroundColor: `${cocktail.color}33`, color: cocktail.color }}
              >
                {cocktail.strength}
              </span>
              <span className="px-3 py-1 bg-gray-800/80 rounded-full text-sm text-gray-300">
                {cocktail.origin}
              </span>
              <span className="px-3 py-1 bg-gray-800/80 rounded-full text-sm text-gray-300">
                {cocktail.taste}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2">
              {cocktail.name}
            </h1>
            <p className="text-2xl text-gray-400">{cocktail.nameZh}</p>
            <p className="text-lg text-gray-500 italic mt-2">
              &ldquo;{cocktail.tagline}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* History */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
            <span
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${cocktail.color}20` }}
            >
              <svg className="w-5 h-5" style={{ color: cocktail.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </span>
            历史故事
          </h2>
          <div className="glass-effect rounded-2xl p-6 md:p-8">
            <p className="text-gray-300 leading-relaxed text-lg">
              {cocktail.history}
            </p>
          </div>
        </section>

        {/* Ingredients */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
            <span
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${cocktail.color}20` }}
            >
              <svg className="w-5 h-5" style={{ color: cocktail.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </span>
            配料清单
          </h2>
          <div className="grid gap-4">
            {cocktail.ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="glass-effect rounded-xl p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: `${cocktail.color}20`, color: cocktail.color }}
                  >
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-white font-medium">{ingredient.name}</p>
                    {ingredient.note && (
                      <p className="text-gray-500 text-sm">{ingredient.note}</p>
                    )}
                  </div>
                </div>
                <span className="text-bar-accent font-mono text-lg">
                  {ingredient.amount}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
            <span
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${cocktail.color}20` }}
            >
              <svg className="w-5 h-5" style={{ color: cocktail.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </span>
            调制步骤
          </h2>
          <div className="relative">
            {/* 连接线 */}
            <div
              className="absolute left-6 top-8 bottom-8 w-0.5"
              style={{ backgroundColor: `${cocktail.color}30` }}
            />

            <div className="space-y-6">
              {cocktail.steps.map((step) => (
                <div key={step.step} className="relative flex gap-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shrink-0 z-10"
                    style={{ backgroundColor: cocktail.color, color: "#000" }}
                  >
                    {step.step}
                  </div>
                  <div className="glass-effect rounded-xl p-5 flex-1">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-16">
          <div
            className="rounded-2xl p-6 md:p-8 border-l-4"
            style={{
              backgroundColor: `${cocktail.color}10`,
              borderColor: cocktail.color,
            }}
          >
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <svg className="w-6 h-6" style={{ color: cocktail.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              调酒师小贴士
            </h3>
            <p className="text-gray-300 leading-relaxed">{cocktail.tips}</p>
          </div>
        </section>

        {/* Back to List */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-bar-accent text-black font-semibold rounded-full hover:bg-bar-accent/90 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回鸡尾酒列表
          </Link>
        </div>
      </div>
    </div>
  );
}
