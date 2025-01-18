import Image from "next/image";
import { Title } from "../ui";
import Spotify from "../ui/Spotify";
import { SlideUpBox } from "../animaiton/layout-animation";

const Welcome = () => {
  return (
    <>
      <Title emoji="&#x1F44B;" text="Welcome" />
      <SlideUpBox boxVariant="image" className="md:col-span-6 mx-auto">
        <Image
          src="/hi.jpg"
          alt="hi"
          width={400}
          height={400}
          className="image"
        />
      </SlideUpBox>
      <SlideUpBox className="text-zinc-600 md:col-span-6">
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
      </SlideUpBox>
      <Spotify />
    </>
  );
};

export default Welcome;
