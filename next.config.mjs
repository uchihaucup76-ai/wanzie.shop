/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "assets.cindigital.id" },
      { protocol: "https", hostname: "cdn.cindigital.id" },
      { protocol: "https", hostname: "www.rumahotp.io" },
    ],
  },
};

export default nextConfig;
