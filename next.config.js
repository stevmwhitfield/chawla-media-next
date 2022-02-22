const STUDIO_REWRITE = {
  source: "/chawla-media-cms/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/studio/:path*"
      : "/sanity/index.html",
};

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  rewrites: () => [STUDIO_REWRITE],
};
