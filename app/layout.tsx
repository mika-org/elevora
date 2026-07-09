import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CursorGlow } from "@/components/shared/CursorGlow";
import { ScrollProgressBar } from "@/components/shared/ScrollProgressBar";
import { BackToTop } from "@/components/shared/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elevora — Web Development & Digital Growth Agency",
  description:
    "Elevora membantu bisnis, event, dan brand berkembang melalui solusi web development, desain UI/UX, dan dashboard admin yang andal.",
  keywords: [
    "Web Agency",
    "Web Development Indonesia",
    "Landing Page Murah",
    "Dashboard Admin Custom",
    "Sistem Registrasi Sekolah",
    "Aplikasi Kasir POS",
    "Elevora",
    "NextJS Tailwind v4",
  ],
  authors: [{ name: "Elevora Team" }],
  creator: "Elevora",
  publisher: "Elevora",
  metadataBase: new URL("https://elevora.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://elevora.com",
    title: "Elevora — Web Development & Digital Growth Agency",
    description:
      "Kami membantu bisnis, event, dan brand tampil lebih profesional lewat website, landing page, sistem registrasi, dan dashboard yang mudah digunakan.",
    siteName: "Elevora",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elevora Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevora — Web Development & Digital Growth Agency",
    description:
      "Kami membantu bisnis, event, dan brand tampil lebih profesional lewat website, landing page, sistem registrasi, dan dashboard yang mudah digunakan.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Inject structured JSON-LD schema markup
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Elevora",
    "url": "https://elevora.com",
    "logo": "https://elevora.com/logo.png",
    "image": "https://elevora.com/og-image.png",
    "description":
      "Elevora membantu bisnis, event, dan brand berkembang melalui solusi web development, strategi digital, dan teknologi yang relevan.",
    "telephone": "+6282134567890",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jakarta",
      "addressCountry": "ID",
    },
    "priceRange": "$$",
  };

  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <Providers>
          {/* Top Reading Progress Bar */}
          <ScrollProgressBar />

          {/* Desktop Hover Cursor Glow Trail */}
          <CursorGlow />

          {/* Sticky Header Nav */}
          <Navbar />

          {/* Main Sections */}
          <main className="flex-grow">{children}</main>

          {/* Footer Navigation */}
          <Footer />

          {/* Back to top scroll widget */}
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
