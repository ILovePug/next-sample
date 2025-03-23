import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   assetPrefix: process.env.ASSET_PREFIX || '',
};

export default nextConfig;
