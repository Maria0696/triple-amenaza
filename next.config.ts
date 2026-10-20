import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // La web se exporta a out/: no depende de un servidor Next.js en producción.
  output: "export",

  trailingSlash: true,

  // La optimización de imágenes integrada requiere un servidor, incompatible con esta exportación.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
