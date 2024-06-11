/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loaderFile: "./src/libs/image-loader.ts"
  }
};

export default nextConfig;
