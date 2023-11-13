import Loading from "@/components/Loading";
import { handleImgUrl } from "@/config/functions";
import useLoading from "@/config/hooks/useLoading";
import { SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import Link from "next/link";

const PersonSlide = ({ i, item }) => {
  const { loading, setLoading } = useLoading(item);
  return (
    <SplideSlide key={i} className="relative">
      <Link href={`/movie/${item.id}`}>
        <div className="relative w-[50vw] h-full">
          {loading && <Loading />}
          <Image src={handleImgUrl(item, "backdrop")} fill alt="" onLoadStart={() => setLoading(true)} onLoad={() => setLoading(false)} />
        </div>
        <div className="absolute left-0 bottom-0 w-full backdrop-blur-lg shadow-lg rounded-t-md flex  px-4 py-2 backdrop-brightness-50 text-2xl">
          <p className="text-center w-full">{item.title}</p>
        </div>
      </Link>
    </SplideSlide>
  );
};
export default PersonSlide;
