"use client";

import { BoxProps } from "@/types/BoxProps";
import { useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { Box } from "../ui";

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

export const SlideUp = ({ ...rest }: BoxProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const halfInView = useInView(containerRef, { amount: 0.2, once: true });

  return (
    <Box
      initial="initial"
      animate={halfInView ? "show" : "initial"}
      transition={{ duration: 0.5 }}
      variants={SlideUpVariants}
      ref={containerRef}
      {...rest}
    />
  );
};
