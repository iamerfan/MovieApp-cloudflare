import TitleComponent from "@/components/Title";
import { fetchFromServer } from "@/config/functions";

export const runtime = "edge";
export async function generateMetadata({ params }) {
  return {
    title: decodeURIComponent(params.title),
  };
}

const Title = async ({ params }) => {
  const { type, id } = params;
  const data = await fetchFromServer(`title/${type}/${id}}`);
  return <TitleComponent data={data} />;
};
export default Title;
