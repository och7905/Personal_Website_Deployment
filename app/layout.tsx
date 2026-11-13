import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "오창현 포트폴리오 | Changhyeon Oh - AI & SW 개발자",
  description: "AI & 소프트웨어 개발자 오창현의 연구 및 포트폴리오 웹사이트입니다.",
  keywords: ["오창현", "오창현 포트폴리오", "Changhyeon Oh", "인공지능", "AI", "백엔드 개발자", "소프트웨어 엔지니어"],
  authors: [{ name: "오창현", url: "https://och7905.github.io/Personal_Website_Deployment/" }],
  openGraph: {
    siteName: "오창현 포트폴리오",
    title: "오창현 포트폴리오 | Changhyeon Oh",
    description: "AI & 소프트웨어 개발자 오창현의 연구 및 포트폴리오 웹사이트입니다.",
    url: "https://och7905.github.io/Personal_Website_Deployment/",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://och7905.github.io/Personal_Website_Deployment/profile.jpg",
        width: 800,
        height: 800,
        alt: "오창현 프로필 사진",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "오창현 포트폴리오 | Changhyeon Oh",
    description: "AI & 소프트웨어 개발자 오창현의 연구 및 포트폴리오 웹사이트입니다.",
    images: ["https://och7905.github.io/Personal_Website_Deployment/profile.jpg"],
  },
  other: {
    "pofol-verify": "pofol-verify-d19368f927182e93",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}