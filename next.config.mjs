import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

/** @type {import('next').NextConfig} */

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: { instrumentationHook: true },
  images: {
    domains: [
      "i0.wp.com",
      "images.unsplash.com",
      "via.placeholder.com",
      "infoveave.com",
      "as2.ftcdn.net",
      "loremflickr.com",
      "pngimg.com",
      "static.vecteezy.com",
      "your-other-domain.com",
      "example.com",
      "cdn.vectorstock.com",
      "png.pngtree.com",
      "www.liblogo.com",
      "projectbalance.com",
    ],
  },
};

export default nextConfig;
