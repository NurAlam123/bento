"use client";

import { BoxProps } from "@/types/BoxProps";
import { MotionProps, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { Box } from "../ui";
import MotionDiv from "../ui/MotionDiv";

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

export const SlideUpBox = ({ className, ...rest }: BoxProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const halfInView = useInView(containerRef, { amount: 0.2, once: true });

  return (
    <Box
      initial="initial"
      animate={halfInView ? "show" : "initial"}
      transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
      variants={SlideUpVariants}
      ref={containerRef}
      className={className}
      {...rest}
    />
  );
};

type SlideUpProps = {
  children: React.ReactNode;
} & MotionProps;

export const SlideUp = ({ children, ...rest }: SlideUpProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const halfInView = useInView(containerRef, { amount: 0.2, once: true });

  return (
    <MotionDiv
      initial="initial"
      animate={halfInView ? "show" : "initial"}
      transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
      variants={SlideUpVariants}
      ref={containerRef}
      className="overflow-hidden"
      {...rest}
    >
      {children}
    </MotionDiv>
  );
};
