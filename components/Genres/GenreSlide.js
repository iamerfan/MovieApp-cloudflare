import React from "react";
import { handleImgUrl } from "@/config/functions";
import { SplideSlide } from "@splidejs/react-splide";
import Image from "@/components/ImageComponent";
import { FaStar } from "react-icons/fa";
import MotionDiv from "@/components/MotionDiv";
import Link from "next/link";
import useType from "@/config/hooks/useType";

const GenreSlide = ({ item, i }) => {
  const { type } = useType();

  return (
    <SplideSlide className="lg:w-[70%] ">
      <Link
        href={`/${item.title || item.name}/${type}/${item.id}${
          type === "tv" ? "/1" : ""
        }`}
      >
        <MotionDiv
          delay={i}
          className={`relative  h-[84vh] w-full   overflow-hidden rounded-lg bg-black-30`}
        >
          <Image priority alt="" src={handleImgUrl(item, "backdrop")} fill />
          <div className=" absolute bottom-0 left-1/2 z-10 flex w-full -translate-x-1/2  flex-row rounded-md bg-black bg-opacity-30 text-justify text-white backdrop-blur-sm lg:top-1/2 lg:mx-auto  lg:w-[90%]">
            <div className="-p-2 relative min-w-[7rem] flex-grow lg:min-w-[10rem] ">
              <Image
                fill
                alt=""
                sizes="(max-width: 768px) 10rem"
                priority
                src={handleImgUrl(item, "poster", "w500")}
                className=" rounded-s-md shadow-md   "
              />
            </div>
            <div className="flex w-full  flex-col gap-2 p-4 ps-6 lg:p-5 lg:ps-7  ">
              <label className="rounded-md pb-2 text-xl font-semibold lg:text-2xl  ">
                {item.title || item.name}
              </label>
              <hr className="opacity-40" />
              <ul className="flex items-center justify-between gap-3 pt-2">
                <li className="flex-1 whitespace-nowrap rounded-lg bg-white px-2 py-1 capitalize text-black  ">
                  {(item.first_air_date && "tv") || "movie"}
                </li>
                <li className="flex flex-1 items-center justify-between gap-1 rounded-lg bg-yellow-300 px-2  py-1 text-black ">
                  {item.vote_average.toFixed(1)}
                  <FaStar className="text-sm " />
                </li>
                <li className="flex-1 rounded-lg border  px-2 py-1 uppercase ">
                  {item.original_language}
                </li>
                <li className="flex-1 rounded-lg border  px-2 py-1 uppercase  ">
                  {item.release_date || item.first_air_date}
                </li>
              </ul>
              <p className="max-h-24 overflow-hidden ">{item.overview}</p>
            </div>
          </div>{" "}
        </MotionDiv>
      </Link>
    </SplideSlide>
  );
};
export default GenreSlide;
