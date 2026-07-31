import type { Metadata } from "next";

import SiteHeader from "@/components/SiteHeader";

import "./globals.css";

export const metadata: Metadata = {
  title: "Стоит ли тебе сдавать информатику? — itpy",
  description: "Диагностический мини-тест для учеников 8–9 классов.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
