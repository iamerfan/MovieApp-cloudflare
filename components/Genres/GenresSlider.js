"use client";

import Slider from "@/components/Home/Slider";
import GenreSlide from "@/components/Genres/GenreSlide";

const GenresSlider = ({ data }) => {
  return (
    <Slider className={"w-full min-h-[80vh] lg:w-[70%] relative "}>
      {data.map((item, i) => (
        <GenreSlide item={item} key={i} />
      ))}
    </Slider>
  );
};
export default GenresSlider;
