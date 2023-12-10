// next.config.js
const nextConfig = {
  images: {
    domains: ["images.pexels.com", "i.pinimg.com", "lh3.googleusercontent.com"],
    // You can keep your existing remotePatterns if needed
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
