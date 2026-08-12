import type { Metadata } from "next";

import SiteHeader from "@/components/SiteHeader";

import "./globals.css";
import "./theme.css";

export const metadata: Metadata = {
  title: "Проверь свою готовность к ОГЭ и ЕГЭ по информатике — itpy",
  description: "Диагностический мини-тест для учеников 8–11 классов.",
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
