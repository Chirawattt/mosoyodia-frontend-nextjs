/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "maps.googleapis.com",
      "mosoyodia-backend-costume-rental.onrender.com",
    ],
  },
  devIndicators: false,
};

export default nextConfig;
