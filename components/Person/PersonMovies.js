"use client";
import Slider from "@/components/Home/Slider";
import PersonSlide from "@/components/Person/PersonSlide";
const PersonMovies = ({ data }) => {
  return (
    <Slider className="flex border border-white-30 max-w-[50vw]">
      {data.map((item, i) => (
        <PersonSlide key={i} item={item} i={i} />
      ))}
    </Slider>
  );
};
export default PersonMovies;
