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
  title: "일본어 문자 플래시카드",
  description: "맞추세요",
  openGraph: {
    images: [
      {
        url: "/og-image.jpg",
        width: 1152,
        height: 648,
        alt: "일본어 문자 플래시카드",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "일본어 문자 플래시카드",
    description: "맞추세요",
    images: ["/og-image.jpg"],
  },
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
