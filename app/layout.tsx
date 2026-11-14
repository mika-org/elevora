import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/shared/BackToTop";

const GTM_ID = "GTM-NKC86WXM";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
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
      className={`${poppins.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6862688611159369"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            // Escape "<" so data can never close the script tag early.
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-background text-foreground"
        suppressHydrationWarning
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Script id="gtm-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});`}
        </Script>
        <Script
          id="gtm-script"
          src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
          strategy="afterInteractive"
        />
        <Providers>

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
