/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: [],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/underscore-page' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/underscore-page' : '',
  trailingSlash: true,
}

module.exports = nextConfig