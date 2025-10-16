import type { NextConfig } from "next";
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'places.googleapis.com',
        pathname: '/v1/**',
      },
    ],
  },
  // ADD THIS - Force CSS processing
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
  },
});

export default withMDX(nextConfig);