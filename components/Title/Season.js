"use client";
import Link from "next/link";
import SeasonEpisode from "@/components/Title/SeasonEpisode";
import MotionDiv from "@/components/MotionDiv";

const Seasons = ({ season, details, seasonId }) => {
  return (
    <MotionDiv delay={seasonId} className="w-full flex gap-4 flex-col">
      <label className={`text-xl lg:text-3xl capitalize`}>Seasons</label>
      <div className="flex items-center gap-4">
        {details.seasons.map((item) => (
          <Link
            key={item.id}
            href={`/${details.name}/tv/${details.id}/${item.season_number}`}
            className={`border p-2 border-black-50 dark:border-white-30 text-xl w-10 text-center ${
              seasonId == item.season_number && "bg-yellow-500 text-black border-black"
            }`}
          >
            {item.season_number}
          </Link>
        ))}
      </div>
      <div className="flex gap-8 items-center w-full overflow-x-auto overflow-y-hidden no-scrollbar">
        {season.episodes.map((item, i) => (
          <SeasonEpisode item={item} details={details} seasonId={seasonId} key={i} />
        ))}
      </div>
    </MotionDiv>
  );
};
export default Seasons;
