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
          logo: <img alt="" src={"/imdb.svg"} className="absolute left-0 z-30 top-1/2 -translate-y-1/2" width={50} height={20} />,
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
              className="absolute left-1 bg-white p-1 py-2 rounded-lg z-30 top-1/2 -translate-y-1/2"
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

          logo: <img src={"/Meta.svg"} className="absolute left-0 z-30 top-1/2 -translate-y-1/2" alt="" width={30} height={30} />,
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
    <div className="flex relative flex-1 flex-col justify-end lg:max-w-md border dark:border-white-30 border-black-30  ">
      <div className="absolute border  border-white-30 left-3 lg:-top-8 top-3 w-36 h-44 dark:bg-black bg-white">
        <Image src={handleImgUrl(details, "poster", "w500")} alt="" fill />
      </div>
      <div className="capitalize  text-sm opacity-90 flex p-2 ps-3 lg:h-36 h-48 flex-col justify-between overflow-hidden left-[160px] absolute top-0 lg:w-64 ">
        {TopDetails.map((item, i) => (
          <p key={i} className=" text-justify dark:text-white text-black">
            <i className="dark:text-white-60 me-2 whitespace-nowrap  ">{item.name} :</i>
            {item.data}
          </p>
        ))}
      </div>
      <div className="flex-grow lg:max-h-[420px] overflow-auto flex flex-col gap-3 p-3  lg:mt-0 mt-[12rem] text-sm opacity-90 capitalize overflow-y-scroll ">
        <div className="flex items-center gap-3 w-full flex-wrap ">
          {Ratings.map((rating, i) => (
            <label key={i} className={` relative p-2 flex-1 text-right font-semibold ${rating.className}`}>
              {rating.logo}
              {rating.value}
            </label>
          ))}
        </div>
        <div className="flex items-center gap-3 w-full flex-wrap">
          {details.genres.map((genre, i) => (
            <Link
              href={`/genres/${genre.id}`}
              key={i}
              className=" min-w-[100px] whitespace-nowrap truncate text-center px-2 py-1 flex-1 bg-black text-white dark:bg-white dark:text-black "
            >
              {genre.name}
            </Link>
          ))}
        </div>

        {BottomDetails.map((item, i) => (
          <p key={i} className=" text-justify dark:text-white text-black">
            <i className="dark:text-white-60 text-black-60 me-2 whitespace-nowrap  ">{item.name} :</i>
            {item.data}
          </p>
        ))}
      </div>
    </div>
  );
};
export default Details;
