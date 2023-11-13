"use client";

import { useRouter } from "next/navigation";

const Filters = ({ params }) => {
  const { type, genre, page, filter: activeFilter } = params;

  const router = useRouter();
  const filters = [
    { name: "Popularity", value: "popularity.desc" },
    { name: "Release Date", value: "release_date.desc" },
    {
      name: "Original Title",
      value: "original_title.desc",
    },
    { name: "Vote Average", value: "vote_average.desc" },
  ];

  const handleChange = (e) => router.push(`/genres/${type}/${genre.id}/${page}/${e.target.value}`);
  return (
    <select
      onChange={handleChange}
      value={activeFilter}
      className="text-xl w-40 capitalize text-center focus:border-none focus:outline-none dark:bg-black dark:text-white"
    >
      {filters.map((filter) => {
        return (
          <option key={filter.name} value={filter.value}>
            {filter.name}
          </option>
        );
      })}
    </select>
  );
};
export default Filters;
