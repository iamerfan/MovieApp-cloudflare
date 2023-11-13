import PersonComponent from "@/components/Person/Person";
import { fetchFromServer } from "@/config/functions";
export const runtime = "edge";
const Person = async ({ params }) => {
  const data = await fetchFromServer(`person/${params.id}}`);
  return <PersonComponent data={data} />;
};
export default Person;
