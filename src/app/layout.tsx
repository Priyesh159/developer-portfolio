import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Name - Software Developer Portfolio",
  description: "Professional software developer portfolio showcasing full-stack development skills, featured projects, and technical expertise in modern web technologies.",
  keywords: "software developer, web developer, full-stack, portfolio, React, Next.js, TypeScript",
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Your Name - Software Developer Portfolio",
    description: "Professional software developer portfolio showcasing full-stack development skills and featured projects.",
    siteName: "Your Name Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Software Developer Portfolio",
    description: "Professional software developer portfolio showcasing full-stack development skills and featured projects.",
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
