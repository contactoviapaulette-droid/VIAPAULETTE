import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // El export estático no lleva servidor que optimice imágenes: los WebP ya
  // se generan al tamaño final en public/img.
  images: { unoptimized: true },
};

export default nextConfig;
