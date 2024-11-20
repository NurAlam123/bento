import Welcome from "./Grids/Welcome";
import HeadingBox from "./HeadingBox";

const BentoGrid = () => {
  return (
    <section className="p-6 mt-6 max-w-4xl mx-auto">
      <HeadingBox />
      {/* Bento starts from here */}
      <div className="grid grid-cols-12 gap-4 w-full">
        <Welcome />
      </div>
    </section>
  );
};

export default BentoGrid;
