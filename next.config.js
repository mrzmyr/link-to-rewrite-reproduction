/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => [
    {
      source: "/",
      destination: "/en",
    },
  ],
};

module.exports = nextConfig;
