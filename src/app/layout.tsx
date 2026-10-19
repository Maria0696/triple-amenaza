import { PublicChrome } from "@/components/web/public-chrome";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Triple Amenaza | Academia de baloncesto",
    template: "%s | Triple Amenaza",
  },
  description:
    "Academia Triple Amenaza: tecnificación de baloncesto, preparación física y desarrollo del jugador.",

  icons: {
    icon: [
      { url: "/resources/imagenes/favicon.ico", sizes: "any" },
      { url: "/resources/imagenes/icon.png", type: "image/png" },
    ],
    apple: "/resources/imagenes/apple-icon.png",
  },

  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body><PublicChrome>{children}</PublicChrome></body>
    </html>
  );
}
