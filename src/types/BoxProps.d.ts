import { MotionProps } from "framer-motion";
import { RefObject } from "react";

interface BoxProps extends HTMLAttributes<HTMLDivElement>, MotionProps {
  children?: React.ReactNode;
  className?: string;
  boxVariant?: "normal" | "image" | "section";
  ref?: RefObject;
}
