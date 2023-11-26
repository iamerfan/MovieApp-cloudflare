import { handleImgUrl } from "@/config/functions";
import Image from "@/components/ImageComponent";
import Link from "next/link";

const Details = ({ data }) => {
  const { extra, details } = data;

  const TopDetails = [
    { name: "name", data: details.title || details.name },
    { name: "Release Date", data: extra.Released },
    { name: "Rated", data: extra.Rated },
    { name: "Runtime", data: extra.Runtime },
  ];
  const Ratings = [
    ...extra.Ratings.map((rating) => {
      if (rating.Source === "Internet Movie Database")
        return {
          name: "IMDB",
          className: "bg-yellow-400 text-black",
          value: rating.Value,
          logo: (
            <img
              alt=""
              src={"/imdb.svg"}
              className="absolute left-0 top-1/2 z-30 -translate-y-1/2"
              width={50}
              height={20}
            />
          ),
        };
      if (rating.Source === "Rotten Tomatoes")
        return {
          name: "Rotten Tomatoes",
          className: "bg-red-500 text-white",
          value: rating.Value,
          logo: (
            <img
              alt=""
              src={"/RT.svg"}
              className="absolute left-1 top-1/2 z-30 -translate-y-1/2 rounded-lg bg-white p-1 py-2"
              width={50}
              height={20}
            />
          ),
        };
      if (rating.Source === "Metacritic")
        return {
          name: "Metacritic",
          className: "border border-black-30 dark:border-white-50",
          value: rating.Value,

          logo: (
            <img
              src={"/Meta.svg"}
              className="absolute left-0 top-1/2 z-30 -translate-y-1/2"
              alt=""
              width={30}
              height={30}
            />
          ),
        };
    }),
  ];
  const BottomDetails = [
    { name: "Overview", data: details.overview },
    {
      name: "production companies",
      data: details.production_companies.map((item) => item.name + " , "),
    },
    { name: "Status", data: details.status },
    { name: "Awards", data: extra.Awards },
    { name: "Country", data: extra.Country },
    {
      name: "Budget",
      data: (details.budget > 0 && details.budget) + " $" || "N/A",
    },
    {
      name: "revenue",
      data: (details.revenue > 0 && details.revenue) + " $" || "N/A",
    },
  ];

  return (
    <div className="relative flex flex-1 flex-col justify-end border-black-30 dark:border-white-30 lg:max-w-md lg:border  ">
      <div className="absolute left-3  top-3 h-44 w-36 border border-white-30 bg-white dark:bg-black lg:-top-8">
        <Image src={handleImgUrl(details, "poster", "w500")} alt="" fill />
      </div>
      <div className="absolute  left-[160px] top-0 flex h-48 flex-col justify-between overflow-hidden p-2 ps-3 text-sm capitalize opacity-90 lg:h-36 lg:w-64 ">
        {TopDetails.map((item, i) => (
          <p key={i} className=" text-justify text-black dark:text-white">
            <i className="me-2 whitespace-nowrap dark:text-white-60  ">
              {item.name} :
            </i>
            {item.data}
          </p>
        ))}
      </div>
      <div className="mt-[12rem] flex flex-grow flex-col gap-3 overflow-auto overflow-y-scroll  p-3 text-sm capitalize opacity-90 lg:mt-0 lg:max-h-[420px] ">
        <div className="flex w-full flex-wrap items-center gap-3 ">
          {Ratings.map((rating, i) => (
            <label
              key={i}
              className={` relative flex-1 p-2 text-right font-semibold ${rating.className}`}
            >
              {rating.logo}
              {rating.value}
            </label>
          ))}
        </div>
        <div className="flex w-full flex-wrap items-center gap-3">
          {details.genres.map((genre, i) => (
            <Link
              href={`/genres/${genre.id}`}
              key={i}
              className=" min-w-[100px] flex-1 truncate whitespace-nowrap bg-black px-2 py-1 text-center text-white dark:bg-white dark:text-black "
            >
              {genre.name}
            </Link>
          ))}
        </div>

        {BottomDetails.map((item, i) => (
          <p key={i} className=" text-justify text-black dark:text-white">
            <i className="me-2 whitespace-nowrap text-black-60 dark:text-white-60  ">
              {item.name} :
            </i>
            {item.data}
          </p>
        ))}
      </div>
    </div>
  );
};
export default Details;
