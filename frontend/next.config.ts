import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'images.unsplash.com' },
      { hostname: 'images.fineartamerica.com' },
      { hostname: 'images.squarespace-cdn.com' },
      { hostname: 'upload.wikimedia.org' },
    ],
  },
};

export default nextConfig;
