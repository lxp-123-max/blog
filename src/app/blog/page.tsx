import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Next.js 14 新特性解析",
    excerpt: "探索 Next.js 14 带来的 App Router、Server Actions 等新特性，以及如何迁移现有项目。",
    date: "2026-05-10",
    tags: ["Next.js", "React", "Web开发"],
  },
  {
    id: 2,
    title: "TypeScript 高级类型技巧",
    excerpt: "深入理解 TypeScript 的泛型、条件类型、映射类型等高级特性，写出更健壮的代码。",
    date: "2026-05-08",
    tags: ["TypeScript", "前端"],
  },
  {
    id: 3,
    title: "Tailwind CSS 实战指南",
    excerpt: "从入门到精通，学习如何使用 Tailwind CSS 快速构建现代化的用户界面。",
    date: "2026-05-05",
    tags: ["CSS", "Tailwind", "前端"],
  },
  {
    id: 4,
    title: "Node.js 性能优化实践",
    excerpt: "分享一些在实际项目中验证过的 Node.js 性能优化技巧和最佳实践。",
    date: "2026-05-01",
    tags: ["Node.js", "后端", "性能"],
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10">
        <nav className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
            🌪️ 随风
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="text-white font-semibold">文章</Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">关于</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-2">📝 文章列表</h1>
        <p className="text-gray-400 mb-12">记录学习点滴，分享技术心得</p>

        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h2 className="text-xl font-bold text-white mb-3 hover:text-purple-400 transition-colors">
                <Link href={`/blog/${article.id}`}>{article.title}</Link>
              </h2>
              
              <p className="text-gray-400 mb-4 line-clamp-3">{article.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{article.date}</span>
                <Link
                  href={`/blog/${article.id}`}
                  className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                >
                  阅读更多 →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-gray-500">
          <p>© 2026 随风 · 用 Next.js + Tailwind CSS 构建</p>
        </div>
      </footer>
    </div>
  );
}