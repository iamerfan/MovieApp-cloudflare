import useType from "@/config/hooks/useType";
import { useEffect, useState } from "react";

const useLoading = (item) => {
  const [loading, setLoading] = useState(true);
  const { type } = useType();

  useEffect(() => {
    const userAgent = navigator.userAgent.includes("Win");
    if (!userAgent)
      setTimeout(() => {
        setLoading(false);
      }, 2000);
  }, [loading]);

  useEffect(() => {
    setLoading(true);
  }, [type]);

  item &&
    useEffect(
      () => setLoading(true),
      [item.poster_path, item.backdrop_path]
    );

  return { loading, setLoading };
};
export default useLoading;
