/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "connect-src 'self' https://*.clarity.ms https://www.google-analytics.com https://region1.google-analytics.com",
      "font-src 'self' data:",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "img-src 'self' data: blob: https://images.pexels.com https://flagcdn.com https://*.clarity.ms https://www.google-analytics.com",
      "media-src 'self'",
      "object-src 'none'",
      "script-src 'self' 'unsafe-inline' https://www.clarity.ms https://scripts.clarity.ms https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline'",
      "upgrade-insecure-requests",
      "worker-src 'self' blob:"
    ].join("; ")
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), geolocation=(), microphone=(), browsing-topics=()"
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin"
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000"
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff"
  },
  {
    key: "X-Frame-Options",
    value: "DENY"
  }
];

const nextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders
      }
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.mentallionsystems.com"
          }
        ],
        destination: "https://mentallionsystems.com/:path*",
        permanent: true
      },
      {
        source: "/images/case-studies-banner.webp",
        destination: "/images/case-studies-banner.avif",
        permanent: true
      },
      {
        source: "/images/service-banner.webp",
        destination: "/images/service-banner.avif",
        permanent: true
      },
      {
        source: "/images/digital-twin-persona-system.webp",
        destination: "/images/digital-twin-persona-system.png",
        permanent: true
      },
      {
        source: "/images/:caseStudy.webp",
        destination: "/images/:caseStudy.jpg",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
