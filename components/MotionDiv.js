"use client";

import { motion } from "framer-motion";
const MotionDiv = ({ delay, className, children }) => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: delay * 0.1 }} className={className}>
      {children}
    </motion.div>
  );
};
export default MotionDiv;
