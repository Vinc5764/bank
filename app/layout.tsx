import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logo from "../public/logo-no-background.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Kpikpi",
  description: "Re-Imagine Ghana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
