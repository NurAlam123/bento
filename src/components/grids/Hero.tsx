import Image from "next/image";
import { Box } from "../ui";

const Hero = () => {
  return (
    <Box boxVariant="image">
      <Image
        src="/i_just_got_an_idea.png"
        alt="Goat saying I just got a crazy idea - picture is form theycantalk.com"
        width={1280}
        height={200}
      />
    </Box>
  );
};

export default Hero;
