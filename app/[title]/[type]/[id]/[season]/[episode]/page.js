import { fetchFromServer } from "@/config/functions";
import EpisodeComponent from "@/components/Title/Episode";
export const runtime = "edge";
export async function generateMetadata({ params }) {
  return {
    title: `S${params.season} - E${params.episode} | ${decodeURIComponent(params.title)}`,
  };
}

const Episode = async ({ params }) => {
  const { episode, season, id, type } = params;
  const data = await getData({ episode, season, id, type });
  return <EpisodeComponent data={data} params={params} />;
};
export default Episode;

const getData = async ({ episode, season, id }) => await fetchFromServer(`episode/${id}/${season}/${episode}`);
