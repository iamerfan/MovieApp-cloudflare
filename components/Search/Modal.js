"use client";

import Slide from "@/components/Home/Slide";
import Loading from "@/components/Loading";
import { fetchFromServer } from "@/config/functions";
import { useEffect, useRef, useState } from "react";
import { PiX } from "react-icons/pi";
import { usePathname } from "next/navigation";
import Item from "@/components/Search/Item";
import HomeSlider from "@/components/Home/HomeSlider";

const Modal = ({ active, hide }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);
  const [loading, setLoading] = useState(false);

  const path = usePathname();
  const inputRef = useRef();
  const handleClick = () => hide();

  const handleChange = async (e) => {
    setValue(e.target.value);
    if (value.length <= 2) return;
    try {
      setLoading(true);
      const res = await fetchFromServer(`search/${value}/${page}`);
      setData(res.multi.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    active && inputRef.current.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  useEffect(() => {
    active && hide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  return (
    <div
      onTouchMove={(e) => e.preventDefault()}
      style={{
        marginLeft: "-.5rem",
      }}
      className={`${
        active ? "-top-4 fixed  opacity-100 " : " top-0 hidden opacity-0"
      } w-full h-[105vh]  dark:bg-black-80  bg-white-80 flex flex-grow  z-50 transition-all duration-300`}
    >
      <button className="absolute right-4 top-4 text-2xl text-black dark:text-white" onClick={handleClick}>
        <PiX />
      </button>
      <div className=" flex-col gap-4 w-full justify-center items-center">
        <div
          className={`border border-white-30 shadow-lg mx-4 rounded-md dark:bg-black-90 dark:text-white text-black bg-white transition-all duration-300 h-12 ${
            focus ? " mt-[5%]" : "mt-[2rem]"
          } `}
        >
          <input
            ref={inputRef}
            value={value}
            placeholder="Search A Movie ... "
            onChange={handleChange}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            className="  rounded-md focus:outline-none  bg-transparent  placeholder-black dark:placeholder-white px-4 py-2 w-full text-2xl text-black dark:text-white"
          />
        </div>
        <div className="  flex flex-grow mt-5 p-4 me-5 ms-2 w-full">
          {value ? !loading ? <HomeSlider stack data={data} title={"multi"} /> : <Loading /> : ""}
        </div>
      </div>
    </div>
  );
};
export default Modal;
