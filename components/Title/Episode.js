"use client";
import HomeSlider from "@/components/Home/HomeSlider";
import { handleImgUrl } from "@/config/functions";
import Image from "@/components/ImageComponent";
import Link from "next/link";
import { PiCalendarFill, PiCaretLeft, PiCaretRight, PiStarFill, PiTimerFill } from "react-icons/pi";

const Episode = ({ data, params }) => {
  const { id, episode, season, title: rawTitle, type } = params;
  const title = decodeURIComponent(rawTitle);
  const episodes = data.seasonData.episodes;
  return (
    <div className="flex flex-col gap-4 p-2">
      <div className="w-full flex gap-4 lg:flex-row flex-col">
        <div className="relative min-h-[80vh] lg:w-[70%] rounded-lg overflow-hidden w-full shadow-2xl ">
          <Image src={handleImgUrl(data, "still")} alt="" fill />
          {episodes.length > Number(episode) + 1 && (
            <Link
              href={`/${title}/${type}/${id}/${season}/${Number(episode) + 1}`}
              className="absolute right-0 top-1/2  flex items-center -translate-y-1/2 p-2 text-white bg-black-60  hover:bg-black-80 hover:text-white"
            >
              <i className="hidden lg:flex md:flex text-sm">Next Episode</i>
              <PiCaretRight className="text-xl" />
            </Link>
          )}
          {episode > 1 && (
            <Link
              href={`/${title}/${type}/${id}/${season}/${Number(episode) - 1}`}
              className="absolute left-0 top-1/2 flex items-center -translate-y-1/2 p-2  text-white bg-black-60  hover:bg-black-80 hover:text-white"
            >
              <PiCaretLeft className="text-xl" />
              <i className="hidden lg:flex md:flex text-sm">Prev Episode</i>
            </Link>
          )}
          <div className="absolute left-0 bottom-0 lg:bottom-4 min-h-[200px] p-2 backdrop-blur-md shadow rounded-md bg-black-20 w-[100%] lg:min-w-[70%] lg:max-w-[95%] flex gap-4">
            <div className="flex flex-col gap-2 px-3 justify-evenly">
              <div className=" text-white border-b border-white-30  pb-2  flex items-center justify-between">
                <label className="text-3xl font-semibold">{data.name}</label>
                <label className="border border-white-30 px-2 py-1 rounded-lg whitespace-nowrap">Episode {episode}</label>
              </div>
              <div className=" flex gap-2 w-full text-white">
                <div className={"flex flex-1 text-center border border-white-30 rounded-lg p-2 justify-between items-center "}>
                  {data.seasonData.air_date}
                  <PiCalendarFill className="pt-1" />
                </div>
                <div className={"flex flex-1 text-center border border-white-30 rounded-lg p-2 justify-between items-center  "}>
                  {data.runtime} minutes
                  <PiTimerFill className="pt-1" />
                </div>
                <div className={"flex flex-1 text-center bg-yellow-400 rounded-lg p-2 text-black justify-between items-center "}>
                  {Math.round(data.vote_average * 10) / 10}
                  <PiStarFill />
                </div>
              </div>
              <p className=" text-justify text-white-80 line-clamp-3 lg:line-clamp-5">{data.overview}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:w-[30%] w-full justify-center ">
          <h1 className="text-2xl font-semibold border-b dark:border-white-30 border-black-50  pb-2 mb-1 flex justify-between items-center">
            <label className="truncate ">{title}</label>
            <label className="border dark:border-white-30 border-black-50 text-base px-2 py-1 rounded-lg">Season {season}</label>
          </h1>
          <div className={`flex flex-wrap gap-2  w-full  ${episodes.length < 10 ? "flex-col" : "flex-row "}`}>
            {episodes.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={`/${title}/${type}/${id}/${season}/${item.episode_number}`}
                  className={`border p-2 dark:border-white-30 border-black-50 rounded-lg truncate overflow-hidden ${
                    item.episode_number == episode && "bg-yellow-400 text-black border-none"
                  }
                  ${episodes.length < 10 ? " w-[100%]" : "w-[48%] "}
                  `}
                >
                  {item.episode_number} . {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {data.crew.length > 0 && <HomeSlider data={data.crew} title={"Crew"} stack />}
      {data.guest_stars.length > 0 && <HomeSlider data={data.guest_stars} title={"Guest"} stack />}
    </div>
  );
};
export default Episode;
