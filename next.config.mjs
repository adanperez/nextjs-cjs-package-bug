/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  transpilePackages: ['@test/esm-module'],
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;
