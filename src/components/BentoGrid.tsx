import Footer from "./Footer";
import { Hero, PortfolioLink, Projects, Socials, Welcome } from "./grids";
import HeadingBox from "./HeadingBox";
import { Box } from "./ui";

const BentoGrid = () => {
  return (
    <section className="p-6 mt-6 max-w-4xl mx-auto">
      <HeadingBox />
      {/* Bento starts from here */}
      <div className="grid grid-cols-12 grid-flow-dense gap-4 w-full mb-8">
        <Hero />
        <Welcome />
        <PortfolioLink />
        <Socials />
        <Projects />
        <Box className="bg-zinc-100">
          <p className="text-center font-bold text-4xl">END</p>
        </Box>
      </div>
      <Footer />
    </section>
  );
};

export default BentoGrid;
