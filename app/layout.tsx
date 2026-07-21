import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Стоит ли тебе сдавать информатику? — itpy",
  description: "Профориентационный мини-тест для учеников 8–9 классов.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
