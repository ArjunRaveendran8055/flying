/** @type {import('next').NextConfig} */
const nextConfig = {
  // OpenNext Cloudflare adapter configuration
  images: {
    domains: [
      "images.unsplash.com",
      "logos-world.net",
      "upload.wikimedia.org",
      "via.placeholder.com",
    ],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "logos-world.net" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "via.placeholder.com" },
    ],
  },
};

module.exports = nextConfig;
