/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com', 
      'via.placeholder.com' // ✅ 이거 추가
    ],
  },
};

module.exports = nextConfig;
