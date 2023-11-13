import Filters from "@/components/Genres/Filters";
import Link from "next/link";

const GenreSelect = ({ params, genre, genres }) => {
  const { type, id, filter } = params;

  return (
    <div className="lg:max-w-[30%] max-w-full flex flex-wrap justify-center gap-2 gap-y-3 flex-grow ">
      <div className="text-2xl flex justify-between items-center font-semibold border-b w-full  dark:border-white-30 border-black-30 pb-1 ">
        Genres
        <Filters params={{ ...params, genre }} />
      </div>
      <label className=" rounded-lg px-2 py-1 flex min-w-[100%] bg-yellow-400 text-black text-center">{genre.name}</label>
      {genres.map((genre) => {
        if (genre.id == id) return;
        return (
          <Link
            className="border dark:border-white-30 border-black-30 rounded-lg py-[5px] px-2 flex min-w-[48%] flex-1"
            href={`/genres/${type}/${genre.id}/1/${filter}`}
            key={genre.id}
          >
            {genre.name}
          </Link>
        );
      })}
    </div>
  );
};
export default GenreSelect;
