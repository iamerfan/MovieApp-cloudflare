"use client";

import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import {
  PiCaretLeftLight,
  PiCaretRightLight,
} from "react-icons/pi";

const Trailer = ({ data }) => {
  const { videos } = data;
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleClick = (type) => {
    if (type === "next" && index < videos.length - 1) {
      setLoading(true);
      setIndex(index + 1);
    } else if (type === "prev" && index > 0) {
      setLoading(true);
      setIndex(index - 1);
    }
  };
  return (
    <div className="lg:min-h-[80vh]  lg:max-w-[65%] lg:border dark:border-white-30 border-black-30  flex flex-grow flex-col justify-end">
      <div className="trailer">
        {videos.length <= 0 ? (
          <h1>Sorry,No Video Has Been Found...</h1>
        ) : (
          <iframe
            width="853"
            onLoad={() => setLoading(false)}
            height="480"
            src={`https://youtube.com/embed/${videos[index]}`}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        )}
        {loading && (
          <>
            <Loading absloute />
            <p className="absolute bottom-0 w-full text-center text-xl">
              برای مشاهده تریلر از یوتیوب vpn خود را روشن
              کنید
            </p>
          </>
        )}
      </div>
      <div className="border-t dark:border-white-30 border-black-30  w-full flex flex-col gap3">
        <div className="lg:text-2xl flex items-center gap-5 lg:px-4 px-1 py-2">
          <FaQuoteLeft className=" hidden lg:flex text-[2.5rem] opacity-50" />

          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center w-full">
              <h2 className="text-xl lg:text-2xl border-b dark:border-white-30 border-black-30 flex-grow w-full pb-3">
                {data.details.title || data.details.name}
              </h2>
              <div className=" flex items-center whitespace-nowrap gap-3  text-sm pb-2">
                {index + 1} of {videos.length}
                <div className="flex items-center text-xl gap-3">
                  <button
                    onClick={() => handleClick("prev")}
                  >
                    <PiCaretLeftLight />
                  </button>
                  <button
                    onClick={() => handleClick("next")}
                  >
                    <PiCaretRightLight />
                  </button>
                </div>
              </div>
            </div>
            <p className="opacity-60 text-sm text-justify  lg:max-w-[500px]   lg:flex ">
              {data.extra.Plot}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Trailer;
