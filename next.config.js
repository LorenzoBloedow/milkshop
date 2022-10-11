/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
        // Webpack plugin to import svg files and convert them to react components automatically.
      use: ["@svgr/webpack"]
    });

    return config;
  },
  swcMinify: true,
}

module.exports = nextConfig;