import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Tree-shake barrel exports so only the icons/utilities actually used are
  // bundled — cuts "unused JavaScript" from these large packages.
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "motion",
      "gsap",
      "@react-three/drei",
      "@react-three/fiber",
    ],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "i.pravatar.cc" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
    ],
  },
};

export default nextConfig;
