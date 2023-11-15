import TitleComponent from "@/components/Title";
import { fetchFromServer } from "@/config/functions";
import { Suspense } from "react";
import TitleSkeleton from "@/components/Skeleton/Title";

export const runtime = "edge";
export async function generateMetadata({ params }) {
  return {
    title: decodeURIComponent(params.title),
  };
}

const Title = async ({ params }) => {
  const { type, id } = params;
  const data = await fetchFromServer(`title/${type}/${id}}`);
  return (
    <Suspense key={type} fallback={<TitleSkeleton />}>
      <TitleComponent data={data} />;
    </Suspense>
  );
};
export default Title;
