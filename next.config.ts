import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co', // This is the line that fixes the error
      },
    ],
  },
};

export default nextConfig;