import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shrikant Bhojane — Frontend Developer",
  description:
    "Frontend Developer, Fresher & Freelancer building digital experiences from frontend to full-stack. Computer Science, Savitribai Phule Pune University, 2026.",
  keywords: [
    "Shrikant Bhojane",
    "Frontend Developer",
    "Freelancer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Shrikant Bhojane" }],
  creator: "Shrikant Bhojane",
  openGraph: {
    type: "website",
    title: "Shrikant Bhojane — Frontend Developer",
    description:
      "Frontend Developer & Freelancer building modern, responsive web experiences. Progressing toward Full-Stack Development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shrikant Bhojane — Frontend Developer",
    description:
      "Frontend Developer & Freelancer building modern, responsive web experiences.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground overflow-x-clip">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-accent-foreground focus:px-6 focus:py-3 focus:text-sm focus:font-bold focus:uppercase focus:tracking-widest"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
