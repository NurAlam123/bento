import { MotionProps } from "framer-motion";

type LinkBoxProps = {
  className?: string;
  boxVairant?: "normal" | "image";
  href: string;
} & MotionProps;
