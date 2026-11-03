import { PublicChrome } from "@/components/web/public-chrome";
import { baseOpenGraph, siteDescription, siteTitle } from "@/lib/metadata";
import type { Metadata } from "next";
import { Gelasio, Noto_Sans } from "next/font/google";

import "./globals.css";

// Fuente variable autoalojada: mismos pesos (hasta 900) en Windows, Apple y Android.
const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Cursiva de los acentos en titulares. Gelasio tiene las métricas de Georgia,
// pero autoalojada se ve igual también en Android (que no incluye Georgia).
const gelasio = Gelasio({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  // Dominio público para las URLs absolutas de Open Graph (ver .env.example).
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),

  title: {
    default: siteTitle,
    template: "%s | Triple Amenaza",
  },
  description: siteDescription,

  // Valor por defecto; cada página pública lo redefine con pageMetadata().
  openGraph: baseOpenGraph,

  icons: {
    icon: [
      { url: "/imagenes/favicon.ico", sizes: "any" },
      { url: "/imagenes/icon.png", type: "image/png" },
    ],
    apple: "/imagenes/apple-icon.png",
  },

  // Sin indexar hasta publicar: entonces quitar noindex y añadir sitemap.xml y robots.txt.
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${notoSans.variable} ${gelasio.variable}`} data-scroll-behavior="smooth">
      <body>
        <PublicChrome>{children}</PublicChrome>
      </body>
    </html>
  );
}
