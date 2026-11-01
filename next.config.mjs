// Each product is an independently deployed app. The gateway keeps the public
// domain cohesive by proxying a product's path prefix to that product's Vercel
// deployment (the Vercel Multi-Zones pattern).

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async rewrites() {
    return [
      { source: "/FinanceGPT", destination: "https://financegpt-alpha.vercel.app/FinanceGPT" },
      { source: "/FinanceGPT/:path*", destination: "https://financegpt-alpha.vercel.app/FinanceGPT/:path*" },
    ];
  },
};

export default nextConfig;
