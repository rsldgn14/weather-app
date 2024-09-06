import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "Enos Weather Forecaster",
  description: "The weather app created by Enos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
