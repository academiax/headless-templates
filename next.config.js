/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},
  reactStrictMode: true,
  swcMinify: true,
  experimental: {},
  eslint: {
    dirs: ['app'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'video.wixstatic.com',
        pathname: '/**',
      },
    ],
    formats: ['image/webp'],
    unoptimized: process.env.NETLIFY === 'true',
  },
};

module.exports = nextConfig;
