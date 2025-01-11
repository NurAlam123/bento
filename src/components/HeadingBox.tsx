import { HeadingBoxImage } from "./ui";

const HeadingBox = () => {
  return (
    <div className="grid place-items-center gap-4 mb-8">
      <HeadingBoxImage />

      <h1 className="text-4xl font-bold">Nur Alam</h1>
      <p className="text-sm text-zinc-600">
        - Front-End Developer <br />
      </p>
    </div>
  );
};

export default HeadingBox;
