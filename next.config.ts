import type { NextConfig } from "next"; 

const nextConfig: NextConfig = {
  images: {
    domains: ["img.clerk.com"], // Add allowed image domains here
  },
};

export default nextConfig;