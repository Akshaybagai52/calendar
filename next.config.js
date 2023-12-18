/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["logodix.com", "localhost", "picsum.photos"], // <== Domain name
  },
};

module.exports = nextConfig;
