import { PublicChrome } from "@/components/web/public-chrome";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

import "./globals.css";
import "./mobile-accessibility.css";

// Fuente variable autoalojada: mismos pesos (hasta 900) en Windows, Apple y Android.
const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteDescription =
  "Academia Triple Amenaza: tecnificación de baloncesto, preparación física y desarrollo del jugador.";

export const metadata: Metadata = {
  // Dominio público para las URLs absolutas de Open Graph (ver .env.example).
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),

  title: {
    default: "Triple Amenaza | Academia de baloncesto",
    template: "%s | Triple Amenaza",
  },
  description: siteDescription,

  // Vista previa al compartir enlaces (WhatsApp, redes sociales).
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Academia Triple Amenaza",
    title: "Triple Amenaza | Academia de baloncesto",
    description: siteDescription,
    images: [
      {
        url: "/imagenes/og-ata.jpg",
        width: 1200,
        height: 630,
        alt: "Jugadores y entrenadores de Academia Triple Amenaza reunidos en la pista",
      },
    ],
  },

  icons: {
    icon: [
      { url: "/imagenes/favicon.ico", sizes: "any" },
      { url: "/imagenes/icon.png", type: "image/png" },
    ],
    apple: "/imagenes/apple-icon.png",
  },

  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={notoSans.variable} data-scroll-behavior="smooth">
      <body>
        <PublicChrome>{children}</PublicChrome>
      </body>
    </html>
  );
}
