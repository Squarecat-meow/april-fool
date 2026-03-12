import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const notoSans = Noto_Sans_KR({
  variable: "--font-noto-sans",
  weight: ["100", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "월하고등학교",
  description: "월하고등학교 홈페이지에 오신 것을 환영합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSans.variable} antialiased`}>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
