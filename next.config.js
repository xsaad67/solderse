/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
const env = {
  MIN_VALUE: 0.1,
  MAX_VALUE: 10,
  BASE_COIN: 'BNB',
  RATE: 5000
}

module.exports = { nextConfig, env }
