/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Ensures static export
  basePath: '/ssg-part-1-',  // Add your repository name here
  images: {
    unoptimized: true,  // Disable image optimization for static exports
  },
};

module.exports = nextConfig;
