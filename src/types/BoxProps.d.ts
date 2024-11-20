import { MotionProps } from "framer-motion";

type BoxProps = {
  className?: string;
  boxVairant?: "normal" | "image" | "section";
} & MotionProps;
