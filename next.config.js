/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/cursos",
        permanent: false,
      },
    ]
  },
}

import("@opennextjs/cloudflare").then(({ initOpenNextCloudflareForDev }) =>
  initOpenNextCloudflareForDev(),
)

export default nextConfig
