/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "5a9is5m72t.ufs.sh",
                port: "/*",
            },
        ],
        unoptimized: true,
    },
};

export default nextConfig;
