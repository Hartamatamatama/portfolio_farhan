/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Disable Turbopack for stability
    optimizeCss: false,
  },
};

module.exports = nextConfig;
