"use client";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { BoxProps } from "@/types/BoxProps";
import clsx from "clsx";

const Box = ({ className, boxVariant = "normal", ...rest }: BoxProps) => {
  return (
    <motion.div
      className={twMerge(
        clsx(
          boxVariant === "normal" &&
            "col-span-12 p-6 border bg-zinc-50 border-zinc-200 rounded-xl",
          boxVariant === "image" && "col-span-12",
          boxVariant === "section" &&
            "col-span-12 p-4 gap-2 border bg-zinc-50 border-zinc-200 rounded-xl grid grid-cols-12 grid-flow-dense",
        ),
        className,
      )}
      {...rest}
    />
  );
};

export default Box;
