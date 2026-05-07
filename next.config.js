/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['picsum.photos', 'i.pravatar.cc']
  }
}
module.exports = nextConfig
