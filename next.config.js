/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.10.110",
        port: "8080",
      },
      {
        protocol: "https",
        hostname: "cdn.hamrah-mechanic.com",
      },

      {
        protocol: "https",
        hostname: "cc.tazminyadak.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: ":3000",
      },
    ],
  },
};

module.exports = nextConfig;
