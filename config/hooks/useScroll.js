"use client";
import { useState, useEffect } from "react";

const useScroll = () => {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    const transparentHeight = 20;
    const initial =
      window.scrollX <= transparentHeight ? true : false;
    setIsTop(initial);
    const handleScroll = () => {
      if (window.scrollY > transparentHeight) {
        return setIsTop(false);
      }
      if (window.scrollY <= transparentHeight) {
        return setIsTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return { isTop };
};

export default useScroll;
