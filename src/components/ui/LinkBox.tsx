"use client";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { LinkBoxProps } from "@/types/LinkBoxProps";
import clsx from "clsx";

const LinkBox = ({
  className,
  boxVariant = "normal",
  href,
  ...rest
}: LinkBoxProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      className={twMerge(
        "block cursor-pointer",
        clsx(
          boxVariant === "normal" &&
            "col-span-12 p-6 border bg-zinc-50 border-zinc-200 rounded-xl",
          boxVariant === "image" && "col-span-12",
        ),
        className,
      )}
      {...rest}
    />
  );
};

export default LinkBox;
