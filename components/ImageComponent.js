"use client";
import Image from "next/image";

const normalizeSrc = (src) => {
  return src.startsWith("/img") ? src.slice(4) : src;
};

const cloudflareLoader = ({ src, width, quality }) => {
  const params = [`width=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join(",");
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
};

const MyImage = ({ src, ...rest }) => {
  return <Image loader={cloudflareLoader} src={normalizeSrc(src)} alt="" {...rest} />;
};

export default MyImage;
