"use client";

import { motion, MotionProps } from "framer-motion";

type MotionDivProps = {
  className?: string;
  ref?: React.RefObject<HTMLDivElement>;
} & MotionProps;

const MotionDiv = ({ className, ref, ...props }: MotionDivProps) => {
  return <motion.div ref={ref} className={className} {...props} />;
};

export default MotionDiv;
