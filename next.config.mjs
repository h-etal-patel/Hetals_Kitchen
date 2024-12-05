/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: "https",
              hostname: "week9-assignment-five.vercel.app",
              port: "",
              pathname: "/**",
            },
        ],
    }
};

export default nextConfig;
