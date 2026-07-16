import type { Metadata } from "next";
import { Shippori_Mincho, Cormorant_Garamond, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Tagumi | Web Engineer & QA Portfolio",
  description: "フリーランスWebエンジニア／QAエンジニアのポートフォリオ。Webサイト・LP制作から品質保証、動画編集まで。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${shipporiMincho.variable} ${cormorant.variable} ${zenKaku.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink font-sans">{children}</body>
    </html>
  );
}
