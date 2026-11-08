import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Yoyo Makeover | สักคิ้วโหงวเฮ้ง เพชรเกษม 81 ยืนหนึ่งเรื่องคิ้วเสริมดวง",
    template: "%s | Yoyo Makeover สักคิ้วโหงวเฮ้ง",
  },
  description:
    "Yoyo Makeover ผู้เชี่ยวชาญสักคิ้วโหงวเฮ้ง คิ้ว 12 นักษัตร แก้คิ้ว สักตาหวาน สักปากชมพู ต่อขนตา ย่านเพชรเกษม 81 หนองแขม กรุงเทพฯ",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%231f1915'/%3E%3Cpath d='M7 25 C 15 12, 27 10, 34 18' fill='none' stroke='%23b48a52' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E",
  },
  openGraph: { type: "website", locale: "th_TH", siteName: "Yoyo Makeover" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=IBM+Plex+Sans+Thai:wght@300;400;500;600&family=Prompt:wght@300;400;500;600&display=swap"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
