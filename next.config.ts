import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite desplegar el mismo proyecto como web estática en un hosting gratuito.
  // No utilizamos API routes ni renderizado dinámico de servidor en esta fase.
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
