import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/context/ThemeContext";
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Your Name - Full-Stack Developer",
    description: "Full-Stack Developer & Problem Solver crafting digital experiences that matter",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {/* Inline script to apply saved theme before hydration to prevent FOUC */}
        <script dangerouslySetInnerHTML={{
            __html: `
          (function(){
            try{
              var t = localStorage.getItem('site-theme');
              if(!t){ t = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }
              document.documentElement.setAttribute('data-theme', t);
              if(['dark','high-contrast','forest'].indexOf(t) > -1){ document.documentElement.classList.add('dark'); } else { document.documentElement.classList.remove('dark'); }
            }catch(e){}
          })();
        `
        }}/>
        <ThemeProvider>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
