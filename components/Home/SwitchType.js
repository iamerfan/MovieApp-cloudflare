"use client";
import Loading from "@/components/Loading";
import { ThemeSwitcher } from "@/components/Home/ThemeButton";
import { useRouter } from "next/navigation";
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
  };
  useEffect(() => {
    setLoading(false);
  }, [type]);

  return (
    <>
      <Modal active={searchActive} hide={() => setSearchActive(false)} />
      <div className="flex items-center justify-center dark:text-white">
        <Link
          href={`/genres${
            type === "tv" ? "/tv/10759" : "/movie/28"
          }/1/popularity.desc`}
          className="me-5 text-xl"
        >
          <BiSolidCategory />
        </Link>
        <button className="me-5" onClick={() => setSearchActive(true)}>
          <FaSearch />
        </button>
        {buttons.map((href) => (
          <a
            onClick={() => handleHref(href)}
            key={href}
            href={`/?type=${href}`}
            className={`rounded-lg border border-red-400 p-1 px-5 text-center text-xs
           font-bold text-inherit shadow backdrop-blur-lg transition duration-200 dark:text-white
           lg:text-base
           ${
             type === href &&
             `${
               href === "movie" ? "-me-2 " : "-ms-2 "
             } z-10  scale-110 transform bg-red-400 text-white  backdrop-blur-lg`
           }`}
          >
            {loading ? <Loading /> : href.toUpperCase()}
          </a>
        ))}

        <ThemeSwitcher />
      </div>
    </>
  );
};
export default SwitchType;
