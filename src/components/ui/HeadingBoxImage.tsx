"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const AvatarVariants: Variants = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const HeadingBoxImage = () => {
  const images = ["/avatar.webp", "/avatar-2.webp"];
  const [show, setShow] = useState<boolean>(false);

  return (
    <motion.div
      className="overflow-hidden transition duration-700 rounded-full"
      onHoverStart={() => setShow(true)}
      onHoverEnd={() => setShow(false)}
    >
      <div className="border-2 border-zinc-300 hover:border-black transition duration-300 rounded-full overflow-hidden size-[128px]">
        <AnimatePresence mode="wait">
          {!show ? (
            <ImageBox key="avatar-1" src={images[0]} />
          ) : (
            <ImageBox key="avatar-2" src={images[1]} />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const ImageBox = ({ src }: { src: string }) => {
  return (
    <motion.div
      exit="exit"
      initial="initial"
      animate="animate"
      variants={AvatarVariants}
    >
      <Image src={src} alt="Avatar" width={128} height={128} />
    </motion.div>
  );
};

export default HeadingBoxImage;
