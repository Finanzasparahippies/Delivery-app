/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@polyfills'] = path.resolve(__dirname, 'polyfills.js');
    return config;
},
}

module.exports = nextConfig
