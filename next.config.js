/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",           // REQUIRED for build-only deploy
  images: {
    unoptimized: true,        // REQUIRED for Cloudflare static hosting
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
