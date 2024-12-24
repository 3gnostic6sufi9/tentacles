/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/callback",
        destination: "/api/callback",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
