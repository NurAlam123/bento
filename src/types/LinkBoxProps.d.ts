import { MotionProps } from "framer-motion";

type LinkBoxProps = {
  className?: string;
  boxVariant?: "normal" | "image";
  href: string;
} & MotionProps;
