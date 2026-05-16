import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/meetup",
        destination: "/woman-queer-tech",
        permanent: true,
      },
      {
        source: "/meetup/",
        destination: "/woman-queer-tech/",
        permanent: true,
      },
    ];
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
