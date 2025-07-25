import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Notes Summarizer | Instantly Summarize Your Study Notes",
  description:
    "Summarize long-form study notes into structured, bullet-point summaries with titles. Powered by AI. Clean, colorful, and student-friendly.",
  keywords: [
    "AI Notes Summarizer",
    "Study Notes Summary",
    "Markdown Notes AI",
    "GPT Notes Summary",
    "AI Education Tool",
    "Student Productivity",
    "Bullet Point Summaries",
    "Summarizer App",
  ]
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
        <Toaster />
      </body>
    </html>
  );
}
