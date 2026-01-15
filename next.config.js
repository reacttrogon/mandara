/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  // images: { unoptimized: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mandara-files.trogon.info",
      },
    ],
  },
};

module.exports = nextConfig;
