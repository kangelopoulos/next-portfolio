/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kate-portfolio-bucket.s3.us-east-2.amazonaws.com',
        port: '', 
        pathname: '/me%26odin.png'
      }
    ]
  }
}

module.exports = nextConfig
