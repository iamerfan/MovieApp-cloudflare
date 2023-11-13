import GenreSelect from "@/components/Genres/GenreSelect";
import GenresSlider from "@/components/Genres/GenresSlider";
import HomeSlider from "@/components/Home/HomeSlider";
import { fetchFromServer } from "@/config/functions";
import Link from "next/link";

export const runtime = "edge";

const Genres = async ({ params }) => {
  const { genres, results, page: activePage, total_pages } = await getGenres(params);
  const { type, id, filter } = params;
  const selected = genres.find((genre) => genre.id == params.id);

  return (
    <div className="flex flex-col gap-4 px-2 lg:px-5">
      <div className="flex gap-6  w-full flex-col lg:flex-row ">
        <GenresSlider data={results.slice(0, 10)} />
        <GenreSelect params={params} genre={selected} genres={genres} />
      </div>
      <HomeSlider stack title={"Discover"} data={results} />
      <div className="self-center flex items-center justify-center mb-4 gap-2">
        {Number(activePage) > 1 && (
          <Link
            className="border border-black-50 dark:border-white-30 p-2 rounded-lg"
            href={`/genres/${type}/${id}/${Number(activePage) - 1}/${filter}`}
          >
            Prev
          </Link>
        )}
        <label className="border border-black-50 dark:border-white-30 text-lg p-2 rounded-lg">
          {activePage} of {total_pages}
        </label>
        {Number(activePage) < Number(total_pages) && (
          <Link
            className="border border-black-50 dark:border-white-30  p-2 rounded-lg "
            href={`/genres/${type}/${id}/${Number(activePage) + 1}/${filter}`}
          >
            Next Page
          </Link>
        )}
      </div>
    </div>
  );
};
export default Genres;

const getGenres = async (params) => {
  const { type, id, page, filter } = params;
  return await fetchFromServer(`genres/${type}/${id}/${page}/${filter}`);
};
