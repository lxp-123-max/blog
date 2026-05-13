import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10">
        <nav className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
            🌪️ 随风
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">文章</Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">关于</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-160px)]">
        <div className="text-center px-6">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-5xl shadow-lg shadow-purple-500/30">
            🌊
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-4">
            你好，我是浪屿
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-xl mx-auto">
            一名热爱技术的开发者，在这里分享学习心得、代码笔记和技术探索
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/blog" 
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/30"
            >
              阅读文章 📖
            </Link>
            <Link 
              href="/about" 
              className="px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              关于我 👤
            </Link>
          </div>
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