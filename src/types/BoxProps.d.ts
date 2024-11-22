import { MotionProps } from "framer-motion";

type BoxProps = {
  className?: string;
  boxVariant?: "normal" | "image" | "section";
} & MotionProps;
