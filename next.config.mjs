// Each product is an independently deployed app. The gateway keeps the public
// domain cohesive by proxying a product's path prefix to that product's Vercel
// deployment (the Vercel Multi-Zones pattern).
//
// BEAMLINE_ORIGIN and BEAMLINE_API_ORIGIN intentionally have no defaults: add
// them in the gateway's Vercel project only after both Beamline deployments
// have stable HTTPS URLs. This keeps local builds and previews valid before
// Beamline is provisioned.
const beamlineOrigin = process.env.BEAMLINE_ORIGIN?.replace(/\/$/, "");
const beamlineApiOrigin = process.env.BEAMLINE_API_ORIGIN?.replace(/\/$/, "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async rewrites() {
    const rewrites = [
      { source: "/FinanceGPT", destination: "https://financegpt-alpha.vercel.app/FinanceGPT" },
      { source: "/FinanceGPT/:path*", destination: "https://financegpt-alpha.vercel.app/FinanceGPT/:path*" },
    ];

    if (beamlineApiOrigin) {
      rewrites.push({
        source: "/Beamline/api/:path*",
        destination: `${beamlineApiOrigin}/api/:path*`,
      });
    }

    if (beamlineOrigin) {
      rewrites.push(
        { source: "/Beamline", destination: `${beamlineOrigin}/Beamline` },
        { source: "/Beamline/:path*", destination: `${beamlineOrigin}/Beamline/:path*` },
      );
    }

    return rewrites;
  },
};

export default nextConfig;
