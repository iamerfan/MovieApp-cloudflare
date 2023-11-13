import { motion } from "framer-motion";
import Image from "next/image";
import { handleImgUrl, handleTime } from "@/config/functions";
import { SplideSlide } from "@splidejs/react-splide";
import Loading from "@/components/Loading";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import useType from "@/config/hooks/useType";
import useLoading from "@/config/hooks/useLoading";

const BigSlide = ({ item, delay }) => {
  const { setLoading, loading } = useLoading(item);
  const { type } = useType();

  return (
    <SplideSlide>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay * 0.1 }}
        className={`rounded-lg flex lg:h-[100vh] h-[70vh] lg:items-center items-end  justify-start relative `}
      >
        <Link href={`/${item.title || item.name}/${type}/${item.id}${type === "tv" ? "/1" : ""}`}>
          {loading && (
            <div
              className="absolute  min-h-[70vh] lg:min-h-[100vh] top-0 bg-black bg-opacity-60 
            animate-pulse w-full z-50  flex justify-center items-center "
            >
              <Loading />
            </div>
          )}
          <Image
            src={handleImgUrl(item, "backdrop")}
            fill
            sizes="(max-width: 768px) 100vw"
            alt=""
            priority
            onLoadStart={() => setLoading(true)}
            onLoad={() => setLoading(false)}
          />
          <div
            className=" text-white lg:mx-auto absolute left-1/2 lg:top-1/2 bottom-0 
          lg:bottom-[unset] -translate-x-1/2  w-full lg:w-[50%] bg-black bg-opacity-30 
          rounded-md backdrop-blur-sm flex flex-row z-10  text-justify"
          >
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
                <li className="rounded-lg text-black capitalize px-2 py-1 flex-1 bg-white  ">{item.media_type}</li>
                <li className="bg-yellow-300 flex items-center gap-1 justify-between text-black rounded-lg flex-1  px-2 py-1 ">
                  {item.vote_average.toFixed(1)}
                  <FaStar className="text-sm " />
                </li>
                <li className="border uppercase rounded-lg  px-2 py-1 flex-1 ">{item.original_language}</li>
                <li className="border uppercase rounded-lg  px-2 py-1 flex-1  ">{handleTime(item)}</li>
              </ul>
              <p className="max-h-24 overflow-hidden ">{item.overview}</p>
            </div>
          </div>
        </Link>
      </motion.div>
    </SplideSlide>
  );
};
export default BigSlide;
