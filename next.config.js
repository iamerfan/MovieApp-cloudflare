/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./components/ImageComponent.js",
  },
  rewrites: () => {
    return [
      {
        source: "/api/tmdb/",
        destination: "https://https://api.themoviedb.org/3/",
      },
      {
        source: "/api/:path*",
        destination: "https://movieapp-iamerfan.vercel.app/api/:path*",
      },
      {
        source: "/cdn-cgi/image/:first/:path*",
        destination: "https://image.tmdb.org/t/p/:path*",
      },
      {
        source: "/public/:path",
        destination: "/:path*",
      },
      {
        source: "/img/:path*",
        destination: "https://image.tmdb.org/t/p/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
