/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
const env = {
  MIN_VALUE: 0.1,
  MAX_VALUE: 10,
  BASE_COIN: 'BNB',
  RATE: 1500,
  CHAIN: 56,
  BASE_CHAIN: '0x38'
}

module.exports = { nextConfig, env }
