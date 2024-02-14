import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kz-shop",
  description: "商品をどこよりも安く！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
