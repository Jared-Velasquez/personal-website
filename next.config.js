/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.icons8.com',
                port: '',
                pathname: '/ios/100/resume.png',
            },
            {
                protocol: 'https',
                hostname: 'adware-technologies.s3.amazonaws.com',
                port: '',
                pathname: '/uploads/technology/thumbnail/20/express-js.png',
            }
        ],
    },
}

module.exports = nextConfig
