import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "随风 - 技术随笔",
  description: "随风飘荡，记录技术人生",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}