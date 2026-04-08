import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClawShop Attendee Guide",
  description: "ClawShop Attendee Guide — get started with KiloClaw",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} font-[family-name:var(--font-jetbrains-mono)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
