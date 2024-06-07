/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loaderFile: "./src/libs/image-loader.ts"
  }
};

export default nextConfig;
