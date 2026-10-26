import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "오창현 (Changhyun Oh) | Academic Portfolio",
  description: "Personal Academic & Research Portfolio",
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
