/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://shineilabs.xyz/',
  },
}

module.exports = nextConfig
