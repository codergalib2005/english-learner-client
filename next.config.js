/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  ...nextConfig,
  images: {
    domains: [
      "images.pexels.com",
      "res.cloudinary.com",
      "animals.png",
      "i.ibb.co",
      "via.placeholder.com",
      "i.dummyjson.com",
    ],
  },
};
