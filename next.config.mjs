/** @type {import('next').NextConfig} */

let apiBaseUrl;

const env = process.env.NODE_ENV;

if (env == "development") {
  apiBaseUrl = 'http://localhost:8081';
} else {
  apiBaseUrl = 'https://dashboard.securesmarthomes.com';
}

const nextConfig = {
  reactStrictMode: false,
  env: {
    API_URL: `${apiBaseUrl}/api/`,
    API_KEY: "temporaryKey",
    IMAGE_PATH: `${apiBaseUrl}/images`,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'dashboard.securesmarthomes.com',
      },
    ],
  },
};

export default nextConfig;
