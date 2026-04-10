import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc'
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com'
      }
    ]
  },
  allowedDevOrigins: ['192.168.153.1']
};

export default nextConfig;
