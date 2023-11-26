"use client";

import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";

const Trailer = ({ data }) => {
  const { videos } = data;
  const [index, setIndex] = useState(0);

  const handleClick = (type) => {
    if (type === "next" && index < videos.length - 1) {
      setIndex(index + 1);
    } else if (type === "prev" && index > 0) {
      setIndex(index - 1);
    }
  };
  return (
    <div className="flex  flex-grow flex-col justify-end border-black-30  dark:border-white-30 lg:min-h-[80vh] lg:max-w-[65%] lg:border">
      <div className="trailer">
        {videos.length <= 0 ? (
          <h1>Sorry,No Video Has Been Found...</h1>
        ) : (
          <iframe
            width="853"
            height="480"
            src={`https://youtube.com/embed/${videos[index]}`}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        )}
      </div>
      <div className="gap3 flex w-full  flex-col border-black-30 dark:border-white-30 lg:border-t">
        <div className="flex items-center gap-5 px-1 py-2 lg:px-4 lg:text-2xl">
          <FaQuoteLeft className=" hidden text-[2.5rem] opacity-50 lg:flex" />

          <div className="flex w-full flex-col gap-2">
            <div className="flex w-full items-center justify-between">
              <h2 className="w-full flex-grow border-black-30 text-xl dark:border-white-30 lg:border-b lg:pb-3 lg:text-2xl">
                {data.details.title || data.details.name}
              </h2>
              <div className=" flex items-center gap-3 whitespace-nowrap  pb-2 text-sm">
                {index + 1} of {videos.length}
                <div className="flex items-center gap-3 text-xl">
                  <button onClick={() => handleClick("prev")}>
                    <PiCaretLeftLight />
                  </button>
                  <button onClick={() => handleClick("next")}>
                    <PiCaretRightLight />
                  </button>
                </div>
              </div>
            </div>
            <p className="text-justify text-sm opacity-60  lg:flex   lg:max-w-[500px] ">
              {data.extra.Plot}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Trailer;
