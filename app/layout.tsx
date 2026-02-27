import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Arish Srinivasan | Software Engineer",
    template: "%s | Arish Srinivasan",
  },
  description:
    "Frontend-focused Software Engineer building modern, scalable, and user-centric web applications using React, Next.js, and Tailwind CSS.",
  keywords: [
    "Arish Srinivasan",
    "Software Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Arish Srinivasan" }],
  creator: "Arish Srinivasan",

  openGraph: {
    title: "Arish Srinivasan | Software Engineer",
    description:
      "Frontend-focused Software Engineer building modern, scalable, and user-centric web applications.",
    url: "https://your-domain.com",
    siteName: "Arish Portfolio",
    images: [
      {
        url: "/og-image.png", // put this in /public
        width: 1200,
        height: 630,
        alt: "Arish Srinivasan Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Arish Srinivasan | Software Engineer",
    description:
      "Frontend-focused Software Engineer building modern, scalable web applications.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main className="max-w-6xl mx-auto px-6 py-12">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
