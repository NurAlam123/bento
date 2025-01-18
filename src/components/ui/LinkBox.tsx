"use client";

import { twMerge } from "tailwind-merge";
import { motion, Variants } from "framer-motion";
import { LinkBoxProps } from "@/types/LinkBoxProps";
import clsx from "clsx";

const SlideUpVariants: Variants = {
  initial: {
    y: 50,
    scale: 0.98,
    opacity: 0,
  },
  show: {
    y: 0,
    scale: 1,
    opacity: 1,
  },
};

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
      variants={SlideUpVariants}
      initial="initial"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{
        ease: "easeOut",
        duration: 0.4,
      }}
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
