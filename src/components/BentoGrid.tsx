import { Hero, PortfolioLink, Projects, Socials, Welcome } from "./grids";
import HeadingBox from "./HeadingBox";

const BentoGrid = () => {
  return (
    <section className="p-6 mt-6 max-w-4xl mx-auto">
      <HeadingBox />
      {/* Bento starts from here */}
      <div className="grid grid-cols-12 grid-flow-dense gap-4 w-full">
        <Hero />
        <Welcome />
        <PortfolioLink />
        <Socials />
        <Projects />
      </div>
    </section>
  );
};

export default BentoGrid;
