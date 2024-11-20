import { Hero, Socials, Welcome } from "./grids";
import HeadingBox from "./HeadingBox";
import { LinkBox } from "./ui";

const BentoGrid = () => {
  return (
    <section className="p-6 mt-6 max-w-4xl mx-auto">
      <HeadingBox />
      {/* Bento starts from here */}
      <div className="grid grid-cols-12 grid-flow-dense gap-4 w-full">
        <Hero />
        <Welcome />
        <LinkBox href="https://nuralam.vercel.app">
          <p>Portfolio</p>
        </LinkBox>
        <Socials />
      </div>
    </section>
  );
};

export default BentoGrid;
