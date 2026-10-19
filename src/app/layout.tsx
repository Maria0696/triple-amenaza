import { PublicChrome } from "@/components/publico/public-chrome";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Triple Amenaza | Academia de baloncesto",
    template: "%s | Triple Amenaza",
  },
  description:
    "Academia Triple Amenaza: tecnificación de baloncesto, preparación física y desarrollo del jugador. Descubre nuestra metodología y programas.",
  robots: { index: false, follow: false }, // Retirar solo cuando el sitio esté listo para publicar.
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
