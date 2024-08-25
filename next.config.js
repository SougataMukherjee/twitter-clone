/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "help.twitter.com",
      "media-exp1.licdn.com",
      "images.unsplash.com",
      "images.cnbctv18.com",
      "localhost",
      "localhost:5000",
    ],
  },
};

module.exports = nextConfig;
