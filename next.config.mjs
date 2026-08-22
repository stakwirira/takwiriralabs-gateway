// This project owns takwiriralabs.com — the root shows a small listing of
// what's hosted here, and everything under a project's own path prefix is
// proxied straight through to that project's own Vercel deployment (the
// "Multi-Zones" pattern: several independently-deployed apps sharing one
// domain by path, each one still just a normal, separately-owned project).
//
// Each proxied app is responsible for its OWN basePath matching the prefix
// used here (see FinanceGPT's app/lib/base-path.mjs) — this config only
// decides which prefix routes to which deployment, nothing about how that
// deployment renders its own pages.
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
