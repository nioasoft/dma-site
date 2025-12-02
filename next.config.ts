import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [
      {
        source: '/services/smart-home',
        destination: '/services/consulting',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
