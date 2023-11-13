import { SplideSlide } from "@splidejs/react-splide";
import { motion } from "framer-motion";
import Image from "next/image";
import { handleImgUrl, handleTime } from "@/config/functions";
import Loading from "@/components/Loading";
import Link from "next/link";
import useType from "@/config/hooks/useType";
import useLoading from "@/config/hooks/useLoading";
import { PiStarFill } from "react-icons/pi";

const Slide = ({ item, delay, slideType }) => {
  const { type } = useType();
  const { loading, setLoading } = useLoading(item);

  const handleHref = () => {
    switch (slideType) {
      case "file":
        return handleImgUrl(item, "file");
      case "profile":
        return `/person/${item.id}`;
      default:
        return `/${item.title || item.name}/${type}/${item.id}${type === "tv" ? "/1" : ""}`;
    }
  };
  return (
    <SplideSlide>
      <Link href={handleHref()}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay * 0.1 }}
          className="flex min-h-[60vh] rounded-lg  w-full h-full max-w-[300px] "
        >
          <div className={`relative rounded-lg h-full w-full ${loading && "animate-pulse"}`}>
            {loading && <Loading absloute />}
            <Image
              alt=""
              sizes="(max-width: 768px) 100vw"
              src={handleImgUrl(item, slideType, "w500")}
              fill
              className="rounded-lg"
              onLoadStart={() => setLoading(true)}
              onLoad={() => setLoading(false)}
            />

            {slideType === "poster" && <PosterSlide item={item} />}
            {slideType === "profile" && <ProfileSlide item={item} />}
          </div>
        </motion.div>
      </Link>
    </SplideSlide>
  );
};

const PosterSlide = ({ item }) => (
  <div className="  text-white w-full gap-2 flex flex-col justify-end backdrop-blur-sm px-5 pb-5 pt-1 shadow-sm items-start  z-10 absolute left-0 bottom-0 bg-gradient-to-t from-slate-950 to-[rgba(0,0,0,.2)] rounded-b-lg  ">
    <label className="w-full font-semibold shadow-lg  text-start border-b-2 pb-2 border-white border-opacity-60">{item.name || item.title} </label>
    <ul className=" w-full flex flex-row items-center gap-3">
      <li className="bg-yellow-300 text-black rounded-lg flex-1  px-2 py-1 flex justify-between items-center ">
        {item.vote_average > 0 ? item.vote_average.toFixed(1) : "N/A"}
        <PiStarFill />
      </li>
      <li className="border uppercase rounded-lg  px-2 py-1 flex-1 ">{item.original_language}</li>
      <li className="border uppercase rounded-lg  px-2 py-1 flex-1  ">{handleTime(item)}</li>
    </ul>
  </div>
);

const ProfileSlide = ({ item }) => (
  <div className="  text-white w-full gap-2 flex flex-col justify-end backdrop-blur-sm lg:px-5 px-4 pb-5 pt-1 shadow-sm items-start  z-10 absolute left-0 bottom-0 bg-gradient-to-t from-slate-950 to-[rgba(0,0,0,.2)] rounded-b-lg  ">
    <div className="w-full font-semibold shadow-lg  text-start border-b-2 pb-2 border-white-30 border-opacity-60 flex items-center justify-between">
      {item.name || item.title}
    </div>
    {(item.character || item.job) && (
      <div className="flex w-full text-center gap-2 items-center">
        <label className="border-2 whitespace-nowrap flex-1 border-white-30  rounded-lg p-2 py-1 ">{item.character || item.job}</label>
      </div>
    )}
  </div>
);

export default Slide;
