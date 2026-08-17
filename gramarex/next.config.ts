import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Opcionális: ha a képeket is szeretnéd statikusan kezelni,
  // itt ki kell kapcsolni az alapértelmezett képoptimalizálást:
  images: {
    unoptimized: true,
  },
};

export default nextConfig;