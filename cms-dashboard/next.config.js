// next.config.js
const nextConfig = {
  images: {
    domains: ["images.pexels.com", "i.pinimg.com"], // Add 'i.pinimg.com' to the list of domains
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
