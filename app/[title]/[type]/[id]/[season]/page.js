import TitleComponent from "@/components/Title";
import { fetchFromServer } from "@/config/functions";
export const runtime = "edge";
export async function generateMetadata({ params }) {
  return {
    title: decodeURIComponent(params.title),
  };
}
const getData = async (type, id, season) => {
  const url = `title/${type}/${id}${type === "tv" && `/${season || 1}`}`;
  return await fetchFromServer(url);
};

const Title = async ({ params }) => {
  const { type, id, season } = params;
  const data = await getData(type, id, season);
  return <TitleComponent data={data} season={season} />;
};
export default Title;
