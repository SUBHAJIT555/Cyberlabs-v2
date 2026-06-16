import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["swiper"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
