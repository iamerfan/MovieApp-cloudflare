import React from "react";
import { handleImgUrl } from "@/config/functions";
import { SplideSlide } from "@splidejs/react-splide";
import Image from "@/components/ImageComponent";
import { FaStar } from "react-icons/fa";
import useLoading from "@/config/hooks/useLoading";
import Loading from "@/components/Loading";
import MotionDiv from "@/components/MotionDiv";

const GenreSlide = ({ item, i }) => {
  const { loading, setLoading } = useLoading();

  return (
    <SplideSlide className="lg:w-[70%] ">
      <MotionDiv delay={i} className={`bg-black-30  relative w-full   h-[84vh] rounded-lg overflow-hidden ${loading && "animate-pulse"}`}>
        {loading && <Loading absloute />}
        <Image priority alt="" src={handleImgUrl(item, "backdrop")} fill onLoadStart={() => setLoading(true)} onLoad={() => setLoading(false)} />
        <div className=" text-white lg:mx-auto absolute left-1/2 lg:top-1/2 bottom-0 -translate-x-1/2  w-full lg:w-[90%] bg-black bg-opacity-30 rounded-md backdrop-blur-sm flex flex-row z-10  text-justify">
          <div className="lg:min-w-[10rem] min-w-[7rem] flex-grow relative -p-2 ">
            <Image
              fill
              alt=""
              sizes="(max-width: 768px) 10rem"
              priority
              src={handleImgUrl(item, "poster", "w500")}
              className=" rounded-s-md shadow-md   "
            />
          </div>
          <div className="flex flex-col  gap-2 lg:p-5 p-4 lg:ps-7 ps-6 w-full  ">
            <label className="lg:text-2xl text-xl pb-2 rounded-md font-semibold  ">{item.title || item.name}</label>
            <hr className="opacity-40" />
            <ul className="flex gap-3 pt-2 items-center justify-between">
              <li className="rounded-lg text-black capitalize px-2 py-1 flex-1 bg-white whitespace-nowrap  ">
                {(item.first_air_date && "tv") || "movie"}
              </li>
              <li className="bg-yellow-300 flex items-center gap-1 justify-between text-black rounded-lg flex-1  px-2 py-1 ">
                {item.vote_average.toFixed(1)}
                <FaStar className="text-sm " />
              </li>
              <li className="border uppercase rounded-lg  px-2 py-1 flex-1 ">{item.original_language}</li>
              <li className="border uppercase rounded-lg  px-2 py-1 flex-1  ">{item.release_date || item.first_air_date}</li>
            </ul>
            <p className="max-h-24 overflow-hidden ">{item.overview}</p>
          </div>
        </div>{" "}
      </MotionDiv>
    </SplideSlide>
  );
};
export default GenreSlide;
