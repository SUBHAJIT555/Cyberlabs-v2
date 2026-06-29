import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  transpilePackages: ["swiper"],
  turbopack: {
    root: process.cwd(),
  },
  trailingSlash: true,
};

export default nextConfig;
