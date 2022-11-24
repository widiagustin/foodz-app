/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async rewrites () {
    return [
      {
        source: '/login',
        destination: '/auth/login'
      },
      {
        source: '/register',
        destination: '/auth/register'
      }
    ]
  },
  nextConfig,
  images: {
    domains: ['food-backend-production.up.railway.app'],
  },
}
