import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Settings - Proxima",
  description: "Adjust your settings",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className={`${inter.className} bg-white text-black h-screen`}>
        {children}
      </div>
    </div>
  );
}
