import BackgroundSlider from "@/components/Home/BackgroundSlider";
import HomeSlider from "@/components/Home/HomeSlider";
import Modal from "@/components/Search/Modal";
import { fetchFromServer } from "@/config/functions";
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
    <div className=" w-screen  overflow-x-hidden  flex flex-col gap-10">
      <Modal />
      <BackgroundSlider data={data[0]} />
      <HomeSlider data={data[1]} title={`Trending `} />
      <HomeSlider data={data[2]} title={`Upcoming`} />
      <HomeSlider data={data[3]} title={`Top Rated`} />
    </div>
  );
}
