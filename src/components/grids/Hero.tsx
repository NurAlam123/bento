"use client";

import Image from "next/image";
import { useState } from "react";
import MotionDiv from "../ui/MotionDiv";
import { MotionProps, Variants } from "framer-motion";

const firstOneVariant: Variants = {
  initial: {
    y: "-100%",
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  const [flip, setFlip] = useState(false);

  return (
    <a href="https://www.tumblr.com/theycantalk/762363162492289025/idea?source=share">
      <ImageContainer
        key="part-1"
        src="/i_just_got_an_idea.webp"
        alt="Goat saying I just got a crazy idea - picture is form theycantalk.com"
        exit="exit"
        initial="initial"
        animate="animate"
        variants={firstOneVariant}
      />
    </a>
  );
};

const ImageContainer: React.FC<{ src: string; alt: string } & MotionProps> = ({
  src,
  alt,
  ...rest
}) => {
  return (
    <MotionDiv {...rest}>
      <Image
        src={src}
        alt={alt}
        width={1280}
        height={200}
        className="object-cover"
      />
    </MotionDiv>
  );
};

export default Hero;
