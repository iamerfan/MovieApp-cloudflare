"use client";

import {
  usePathname,
  useSearchParams,
} from "next/navigation";

const useType = () => {
  const path = usePathname();
  const typeParam = useSearchParams().get("type");
  const type =
    (path.includes("tv") && "tv") || typeParam || "movie";
  const isHome = path === "/" ? true : false;
  return { type, isHome, path };
};
export default useType;
