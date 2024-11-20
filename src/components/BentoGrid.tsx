import Image from "next/image";
import Box from "./Box";
import Welcome from "./Grids/Welcome";
import HeadingBox from "./HeadingBox";

const BentoGrid = () => {
  return (
    <section className="p-6 mt-6 max-w-4xl mx-auto">
      <HeadingBox />
      {/* Bento starts from here */}
      <div className="grid grid-cols-12 grid-flow-dense gap-4 w-full">
        <Box boxVairant="image">
          <Image
            src="/i_just_got_an_idea.png"
            alt="Goat saying I just got a crazy idea - picture is form theycantalk.com"
            width={1280}
            height={200}
          />
        </Box>
        <Welcome />
      </div>
    </section>
  );
};

export default BentoGrid;
