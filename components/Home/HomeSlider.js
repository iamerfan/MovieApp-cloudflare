"use client";
import Slider from "@/components/Home/Slider";
import { motion } from "framer-motion";
import Slide from "@/components/Home/Slide";
import { smallBP } from "@/config/consts";
import { handleImageType, handleValid } from "@/config/functions";

const HomeSlider = ({ title, data, stack }) => {
  return (
    <motion.div className="flex flex-col flex-grow ps-4">
      <motion.label className={`${!stack && "lg:ps-[4rem] "} text-3xl capitalize`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        {title === "multi" ? "Results " : title}
      </motion.label>
      <Slider className="py-3" options={smallBP(stack)}>
        {data.map((item, i) => {
          if (!handleValid(item)) return;

          return (
            <Slide
              slideType={title === "multi" && item.profile_path ? "profile" : handleImageType(title)}
              item={item}
              delay={i}
              key={i}
              title={title}
            />
          );
        })}
      </Slider>
    </motion.div>
  );
};
export default HomeSlider;
