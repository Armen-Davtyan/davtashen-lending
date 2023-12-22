/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // useFileSystemPublicRoutes: false,
  images: {
    // cache optimized images for 60 seconds    
    minimumCacheTTL: 60,  
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
