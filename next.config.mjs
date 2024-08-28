/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        ppr: 'incremental', // enable experimental partial pre-rendering
      },
};

export default nextConfig;
