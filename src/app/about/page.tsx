import Link from "next/link";

export default function AboutPage() {
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
            <Link href="/about" className="text-white font-semibold">关于</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-6xl shadow-lg shadow-purple-500/30">
          🌊
        </div>

        <h1 className="text-4xl font-bold text-white text-center mb-2">浪屿</h1>
        <p className="text-xl text-gray-400 text-center mb-12">全栈开发者 · 技术爱好者</p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">👋 关于我</h2>
          <div className="text-gray-300 space-y-4">
            <p>你好！我是浪屿，一名热爱技术的开发者，目前专注于 Web 开发领域。</p>
            <p>我创建了「随风」这个技术博客，用于记录学习心得、分享技术探索。这里有我在开发过程中遇到的问题和解决方案，也有一些对新技术的研究和思考。</p>
            <p>如果你也有相同兴趣，欢迎交流学习 🚀</p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🛠️ 技术栈</h2>
          <div className="flex flex-wrap gap-3">
            {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL", "Docker", "Git"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full border border-purple-500/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">📬 联系我</h2>
          <p className="text-gray-400 mb-4">如果你有任何问题、合作意向或只是想打个招呼，欢迎联系我：</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:contact@example.com"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              📧 发送邮件
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              💻 GitHub
            </a>
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