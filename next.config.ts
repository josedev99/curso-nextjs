/**import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental'
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
*/


import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  webpack(config) {
    // Agregar resolución de alias para '@'
    config.resolve.alias['@'] = path.join(__dirname, '/');
    return config;
  },
};

export default nextConfig;