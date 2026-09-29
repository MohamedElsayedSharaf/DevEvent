import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
  
    turbopackFileSystemCacheForDev: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',  
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ]
  }
};

export default nextConfig;


