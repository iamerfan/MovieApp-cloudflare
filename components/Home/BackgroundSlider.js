"use client";
import Slider from "@/components/Home/Slider";
import BigSlide from "@/components/Home/BigSlide";

const BackgroundSlider = ({ data }) => {
  return (
    <Slider
      options={{
        autoplay: true,
        perMove: 1,
        perPage: 1,
        pagination: true,
      }}
    >
      {data.map((item, i) => (
        <BigSlide item={item} key={i} delay={i} />
      ))}
    </Slider>
  );
};
export default BackgroundSlider;
