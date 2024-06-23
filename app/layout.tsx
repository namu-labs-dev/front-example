import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Proxima",
  description:
    "A Crypto Trading Idea, Trade and Monitor Your Transactions efficiently",

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1F1F1F] text-white h-screen`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
