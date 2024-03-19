/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/auth/:path*",
        destination: "http://localhost:1000/auth/:path*", // Your API server URL
      },
    ];
  },
};

module.exports = nextConfig;
