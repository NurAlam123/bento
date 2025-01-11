"use client";

import { motion, MotionProps, Variants } from "framer-motion";

// Props Types
type TextSlideUpProps = {
  children: React.ReactNode;
  delay?: number;
  spring?: boolean;
} & MotionProps;

// Variants
const TextSlideUpVariants: Variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  slideUp: {
    y: 0,
    opacity: 1,
  },
};

export const TextSlideUp: React.FC<TextSlideUpProps> = ({
  children,
  delay = 0,
  spring,
  ...rest
}) => {
  const chars = children?.toString().split("");

  return (
    <>
      <span hidden>{children}</span>
      <motion.span
        className="inline-block overflow-hidden"
        aria-hidden
        initial="initial"
        whileInView="slideUp"
        transition={{
          ...(spring && { type: "spring" }),
          ...(spring && { stiffness: 50 }),
          staggerChildren: 0.1,
          duration: 0.2,
          delayChildren: delay,
          ease: "easeIn",
        }}
        {...rest}
      >
        {chars?.map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={TextSlideUpVariants}
          >
            {char}
            {char === " " && <>&nbsp;</>}
          </motion.span>
        ))}
      </motion.span>
    </>
  );
};
