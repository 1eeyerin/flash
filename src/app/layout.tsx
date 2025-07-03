import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "일본어 문자 플래시카드 - 히라가나, 가타카나 학습",
  description: "해보세요",
  keywords: [
    "일본어",
    "히라가나",
    "가타카나",
    "플래시카드",
    "일본어 학습",
    "일본어 문자",
    "일본어 암기",
    "일본어 연습",
    "무료 일본어",
    "일본어 앱",
  ],
  authors: [{ name: "Flash Language" }],
  creator: "Flash Language",
  publisher: "Flash Language",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://flash-cards-lang.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://flash-cards-lang.vercel.app",
    siteName: "일본어 문자 플래시카드",
    title: "일본어 문자 플래시카드 - 히라가나, 가타카나 학습",
    description: "해보세요",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "일본어 문자 플래시카드 - 히라가나, 가타카나 학습",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@flashlanguage",
    creator: "@flashlanguage",
    title: "일본어 문자 플래시카드 - 히라가나, 가타카나 학습",
    description: "해보세요",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "education",
  classification: "일본어 학습",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
