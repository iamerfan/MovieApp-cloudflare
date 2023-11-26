import BackgroundSlider from "@/components/Home/BackgroundSlider";
import HomeSlider from "@/components/Home/HomeSlider";
import Loading from "@/components/Loading";
import Modal from "@/components/Search/Modal";
import { fetchFromServer } from "@/config/functions";
import { Suspense } from "react";
export const runtime = "edge";

const getData = async (type) => {
  const url = `home?type=${type || "movie"}`;
  const data = await fetchFromServer(url);
  return [...data.map((item) => item.slice(0, 7))]; // reduce to 7 items for better performance
};

export default async function Home({ searchParams }) {
  const type = searchParams.type;
  const data = await getData(type);
  return (
    <div className=" w-screen overflow-x-hidden flex flex-col gap-10">
      <Modal />
      <BackgroundSlider data={data[0]} />
      <HomeSlider stack data={data[1]} title={`Trending `} />
      <HomeSlider stack data={data[2]} title={`Upcoming`} />
      <HomeSlider stack data={data[3]} title={`Top Rated`} />
    </div>
  );
}
