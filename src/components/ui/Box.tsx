"use client";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { BoxProps } from "@/types/BoxProps";
import clsx from "clsx";

const Box = ({ className, boxVairant = "normal", ...rest }: BoxProps) => {
  return (
    <motion.div
      className={twMerge(
        clsx(
          boxVairant === "normal" &&
            "col-span-12 p-6 border bg-zinc-50 border-zinc-200 rounded-xl",
          boxVairant === "image" && "col-span-12",
          boxVairant === "section" &&
            "col-span-12 p-4 gap-2 border bg-zinc-50 border-zinc-200 rounded-xl grid grid-cols-12 grid-flow-dense",
        ),
        className,
      )}
      {...rest}
    />
  );
};

export default Box;
