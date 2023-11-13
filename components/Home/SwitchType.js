"use client";
import Loading from "@/components/Loading";
import { ThemeSwitcher } from "@/components/Home/ThemeButton";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Modal from "@/components/Search/Modal";
import { BiSolidCategory } from "react-icons/bi";
import Link from "next/link";

const SwitchType = ({ type }) => {
  const [loading, setLoading] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const buttons = ["movie", "tv"];
  const router = useRouter();

  const handleHref = (href) => {
    if (href === type) return;
    setLoading(true);
    return router.push(`/?type=${href}`);
  };
  useEffect(() => {
    setLoading(false);
  }, [type]);

  return (
    <>
      <Modal
        active={searchActive}
        hide={() => setSearchActive(false)}
      />
      <div className="flex justify-center items-center dark:text-white">
        <Link
          href={`/genres${
            type === "tv" ? "/tv/10759" : "/movie/28"
          }/1/popularity.desc`}
          className="text-xl me-5"
        >
          <BiSolidCategory />
        </Link>
        <button
          className="me-5"
          onClick={() => setSearchActive(true)}
        >
          <FaSearch />
        </button>
        {buttons.map((href) => (
          <button
            onClick={() => handleHref(href)}
            key={href}
            className={`text-inherit dark:text-white font-bold p-1 px-5 transition duration-200
           rounded-lg shadow border-red-400 border lg:text-base text-xs text-center
           backdrop-blur-lg
           ${
             type === href &&
             `${
               href === "movie" ? "-me-2 " : "-ms-2 "
             } transform  scale-110 z-10 bg-red-400 text-white  backdrop-blur-lg`
           }`}
          >
            {loading ? <Loading /> : href.toUpperCase()}
          </button>
        ))}

        <ThemeSwitcher />
      </div>
    </>
  );
};
export default SwitchType;
