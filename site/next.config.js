/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Nivelles Technologies',
    description: 'The official store for Nivelles workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://nivellessebastien.github.io/Kasm',
    contactUrl: '',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
