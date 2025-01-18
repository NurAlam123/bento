"use client";

import Image from "next/image";
import { SlideUpBox } from "../animaiton/layout-animation";
import { useState } from "react";
import MotionDiv from "../ui/MotionDiv";
import { AnimatePresence, MotionProps, Variants } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";

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

const secondOneVariant: Variants = {
  initial: {
    y: "100%",
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    y: "100%",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  const [flip, setFlip] = useState(false);

  return (
    <SlideUpBox
      transition={{
        delay: 1.1,
      }}
      boxVariant="image"
      onHoverStart={() => setFlip(true)}
      onHoverEnd={() => setFlip(false)}
      className="relative overflow-hidden w-fit h-fit"
    >
      <p className="absolute font-medium text-3xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10 flex justify-center items-center">
        {flip ? <ArrowDown /> : <ArrowUp />} &nbsp;Page {flip ? 2 : 1}
      </p>
      <a href="https://www.tumblr.com/theycantalk/762363162492289025/idea?source=share">
        <AnimatePresence mode="wait">
          {!flip ? (
            <ImageContainer
              key="part-1"
              src="/i_just_got_an_idea.png"
              alt="Goat saying I just got a crazy idea - picture is form theycantalk.com"
              exit="exit"
              initial="initial"
              animate="animate"
              variants={firstOneVariant}
            />
          ) : (
            <ImageContainer
              key="part-2"
              src="/i_just_got_an_idea_2.png"
              exit="exit"
              initial="initial"
              animate="animate"
              variants={secondOneVariant}
              alt="Goat saying what if we stop listening the dog - picture is form theycantalk.com"
            />
          )}
        </AnimatePresence>
      </a>
    </SlideUpBox>
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
