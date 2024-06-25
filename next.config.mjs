/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  compress: false,
  images: {
    loaderFile: "./src/libs/image-loader.ts",
  },
};

export default nextConfig;
