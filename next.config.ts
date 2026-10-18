import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generación de la web como sitio estático
  output: "export",

  // Mantener la barra final en las URLs
  trailingSlash: true,

  // Permitir imágenes con exportación estática
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
