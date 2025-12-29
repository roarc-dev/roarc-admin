/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Framer 컴포넌트에서 사용하는 addPropertyControls 호환을 위해
  transpilePackages: ['framer-motion'],
  // 환경 변수 설정
  env: {
    NEXT_PUBLIC_PROXY_BASE_URL: process.env.NEXT_PUBLIC_PROXY_BASE_URL || 'https://wedding-admin-proxy.vercel.app'
  }
}

module.exports = nextConfig
