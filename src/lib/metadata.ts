import type { Metadata } from "next";

export const siteTitle = "Triple Amenaza | Academia de baloncesto";

export const siteDescription =
  "Academia Triple Amenaza: tecnificación de baloncesto, preparación física y desarrollo del jugador.";

/** Base de la vista previa al compartir enlaces (WhatsApp, redes sociales). */
export const baseOpenGraph = {
  type: "website",
  locale: "es_ES",
  siteName: "Academia Triple Amenaza",
  title: siteTitle,
  description: siteDescription,
  images: [
    {
      url: "/imagenes/og-ata.jpg",
      width: 1200,
      height: 630,
      alt: "Jugadores y entrenadores de Academia Triple Amenaza reunidos en la pista",
    },
  ],
} satisfies Metadata["openGraph"];

type PageMetadataInput = {
  title: string;
  description: string;
  /** Ruta pública con barra final, p. ej. "/programas/". */
  path: string;
};

/**
 * Metadatos de una página pública. Next.js no fusiona `openGraph` entre el
 * layout y la página: si la página no lo redefine entero, hereda el título y
 * la descripción generales al compartirse.
 */
export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      ...baseOpenGraph,
      title: `${title} | Triple Amenaza`,
      description,
      url: path,
    },
  };
}
