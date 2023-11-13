"use client";
import SwitchType from "@/components/Home/SwitchType";
import useScroll from "@/config/hooks/useScroll";
import useType from "@/config/hooks/useType";
import Link from "next/link";

const Header = () => {
  const { type, isHome } = useType();
  const { isTop } = useScroll();

  const HeaderClassName = () => {
    let className = isHome ? "fixed top-0" : "sticky top-0 z-10";
    className += isTop && " dark:backdrop-blur-none dark:backdrop-brightness-[unset] bg-transparent bg-opacity-0";

    className += isTop && isHome && " text-white dark:text-white";
    className +=
      " dark:backdrop-blur-lg dark:backdrop-brightness-50 dark:bg-transparent bg-white flex w-full transition-all duration-300  dark:text-white text-black  items-center justify-between px-2 z-10 min-h-[4rem]";
    return className;
  };

  return (
    <div className={HeaderClassName()}>
      <Link href={`/${type && `?type=${type}`}`} className="text-2xl font-extrabold text-red-500 lg:ms-3 ">
        E-Movie
      </Link>
      <SwitchType type={type} />
    </div>
  );
};
export default Header;
