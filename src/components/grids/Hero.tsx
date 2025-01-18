import Image from "next/image";
import { SlideUpBox } from "../animaiton/layout-animation";

const Hero = () => {
  return (
    <SlideUpBox
      transition={{
        delay: 1.1,
      }}
      boxVariant="image"
    >
      <Image
        src="/i_just_got_an_idea.png"
        alt="Goat saying I just got a crazy idea - picture is form theycantalk.com"
        width={1280}
        height={200}
      />
    </SlideUpBox>
  );
};

export default Hero;
