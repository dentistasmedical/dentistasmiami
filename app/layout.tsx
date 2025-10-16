import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/layout/Header";
import {Footer}from "@/components/layout/Footer";
import DOMPurify from 'dompurify';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DentistasMiami | Encuentra los Mejores Dentistas en Miami",
  description: "Encuentra dentistas de confianza en Miami que hablan español. Compara precios, lee reseñas y agenda citas con los mejores profesionales dentales en tu área.",
  keywords: [
    "dentista miami",
    "dentistas que hablan español miami",
    "emergencia dental miami",
    "implantes dentales miami",
    "ortodoncista miami",
    "dentista pediatrico miami",
    "blanqueamiento dental miami"
  ],
  authors: [{ name: "DentistasMiami" }],
  openGraph: {
    title: "DentistasMiami | Encuentra los Mejores Dentistas en Miami",
    description: "Encuentra dentistas de confianza en Miami que hablan español. Compara precios, lee reseñas y agenda citas.",
    url: "https://dentistasmiami.com",
    siteName: "DentistasMiami",
    locale: "es_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DentistasMiami - Encuentra dentistas en Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DentistasMiami | Encuentra los Mejores Dentistas en Miami",
    description: "Encuentra dentistas de confianza en Miami que hablan español.",
    images: ["/og-image.jpg"],
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
  alternates: {
    canonical: "https://dentistasmiami.com",
  },
  other: {
    "google-site-verification": process.env.GOOGLE_SITE_VERIFICATION || "",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#06b6d4" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-white text-gray-900 min-h-screen flex flex-col`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-coral-500 text-white px-4 py-2 rounded-md z-50 font-medium"
        >
          Saltar al contenido principal
        </a>
        
        <Header />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "DentistasMiami",
              description: "Encuentra dentistas de confianza en Miami que hablan español",
              url: "https://dentistasmiami.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://dentistasmiami.com/buscar?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              inLanguage: "es",
              publisher: {
                "@type": "Organization",
                name: "DentistasMiami",
                url: "https://dentistasmiami.com",
              },
            })),
          }}
        />
      </body>
    </html>
  );
}
