import Image from "next/image";
import { Box, Title } from "../ui";
import Spotify from "../ui/Spotify";

const Welcome = () => {
  return (
    <>
      <Title text="&#x1F44B; Welcome" />
      <Box boxVariant="image" className="md:col-span-6 mx-auto">
        <Image
          src="/hi.jpg"
          alt="hi"
          width={400}
          height={400}
          className="image"
        />
      </Box>
      <Box className="text-zinc-600 md:col-span-6">
        <p className="text-xl">
          Hi, I am{" "}
          <span className="text-2xl text-black">
            <strong>Nur Alam.</strong>
          </span>
          <br />
          You can call me Nur.
          <br />
          And welcome to my own bento grid layout.
        </p>
      </Box>
      <Spotify />
    </>
  );
};

export default Welcome;
