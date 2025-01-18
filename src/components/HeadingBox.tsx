import { SlideUp } from "./animaiton/layout-animation";
import { HeadingBoxImage } from "./ui";

const HeadingBox = () => {
  return (
    <div className="grid place-items-center gap-4 mb-8">
      <SlideUp
        transition={{
          delay: 0.8,
        }}
      >
        <HeadingBoxImage />
      </SlideUp>

      <SlideUp
        transition={{
          delay: 0.9,
        }}
      >
        <h1 className="text-4xl font-bold">Nur Alam</h1>
      </SlideUp>
      <SlideUp
        transition={{
          delay: 1,
        }}
      >
        <p className="text-sm text-zinc-600">
          - Front-End Developer <br />
        </p>
      </SlideUp>
    </div>
  );
};

export default HeadingBox;
