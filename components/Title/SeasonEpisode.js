"use client";
import Loading from "@/components/Loading";
import MotionDiv from "@/components/MotionDiv";

import { handleImgUrl } from "@/config/functions";
import useLoading from "@/config/hooks/useLoading";
import Image from "next/image";
import Link from "next/link";

const SeasonEpisode = ({ details, item, seasonId, i }) => {
  const { loading, setLoading } = useLoading(item);
  return (
    <Link href={`/${details.name}/tv/${details.id}/${seasonId}/${item.episode_number}`} className="flex-1 rounded-md relative w-full" key={item.id}>
      <MotionDiv
        delay={i}
        className={`h-[350px] lg:w-[280px] w-[230px] relative rounded-lg overflow-hidden bg-black-30 dark:bg-white-30 ${loading && "animate-pulse"}`}
      >
        <Image
          src={handleImgUrl(item, "still")}
          className="rounded-lg"
          onLoadStart={() => setLoading(true)}
          onLoad={() => setLoading(false)}
          fill
          alt=""
        />
        {loading && <Loading absloute />}
      </MotionDiv>

      <label
        className="absolute bottom-[-2px] text-lg font-semibold text-center text-white shadow-lg
                   opacity-90 left-0 w-full min-h-[50px]  backdrop-blur-lg p-2 rounded-b-lg "
      >
        {item.episode_number}.{item.name}
      </label>
    </Link>
  );
};
export default SeasonEpisode;
