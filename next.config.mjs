/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        URL_SOCKETIO: process.env.URL_SOCKETIO
    }
};

export default nextConfig;
