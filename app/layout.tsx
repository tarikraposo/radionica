import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geist = localFont({
  src: "../public/fonts/Geist/static/Geist-Regular.ttf",
  variable: "--font-geist",
});

const geistMono = localFont({
  src: "../public/fonts/Geist_Mono/static/GeistMono-Regular.ttf",
  variable: "--font-geist-mono",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Mesa Radiônica | Terapia Energética",
  description:
    "Descubra o poder transformador da Mesa Radiônica. Uma ferramenta de harmonização energética para equilíbrio físico, mental e espiritual.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geist.variable} ${geistMono.variable} ${playfair.variable}`}
    >
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
