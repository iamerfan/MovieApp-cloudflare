import HomeSlider from "@/components/Home/HomeSlider";
import Details from "@/components/Title/Details";
import Seasons from "@/components/Title/Season";
import Trailer from "@/components/Title/Trailer";
import { handleImgUrl } from "@/config/functions";
import Image from "next/image";

const TitleComponent = ({ data, season: seasonId }) => {
  const isValid = (value) =>
    value && value.length > 0 ? true : false;
  const {
    details,
    similar,
    season,
    images: { posters },
    credits: { cast, crew },
  } = data;
  return (
    <div className="min-h-[90vh]  dark:bg-black flex p-2 lg:px-5 px-2 flex-col gap-2 dark:text-white bg-white ">
      <div className="flex  lg:flex-row flex-col gap-5 w-full ">
        <Trailer data={data} />
        <Details data={data} />
      </div>

      <div className="flex flex-col gap-5 pt-5">
        {details.seasons && (
          <Seasons
            season={season}
            details={details}
            seasonId={seasonId}
          />
        )}
        {isValid(posters) && (
          <HomeSlider
            stack
            title={`Images`}
            data={posters}
          />
        )}
        {isValid(cast) && (
          <HomeSlider stack title={`Cast`} data={cast} />
        )}
        {isValid(crew) && (
          <HomeSlider stack title={`Crew`} data={crew} />
        )}
        {isValid(similar.results) && (
          <HomeSlider
            stack
            title="Similar To This"
            data={similar.results}
          />
        )}
      </div>
    </div>
  );
};
export default TitleComponent;
