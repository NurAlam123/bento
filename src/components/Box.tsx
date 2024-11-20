"use client";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const Box = ({ className, ...rest }: BoxProps) => {
  return (
    <motion.div
      className={twMerge(
        "col-span-12 p-6 border bg-zinc-100 rounded-xl",
        className,
      )}
      {...rest}
    />
  );
};

export default Box;
