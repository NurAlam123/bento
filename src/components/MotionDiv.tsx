"use client";
import { motion, MotionProps } from "framer-motion";

type MotionDivProps = {
  className?: string;
} & MotionProps;

const MotionDiv = ({ className, ...props }: MotionDivProps) => {
  return <motion.div className={className} {...props} />;
};

export default MotionDiv;
