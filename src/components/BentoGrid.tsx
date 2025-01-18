import { SlideUp, SlideUpBox } from "./animaiton/layout-animation";
import Footer from "./Footer";
import { Hero, PortfolioLink, Projects, Socials, Welcome } from "./grids";
import HeadingBox from "./HeadingBox";

const BentoGrid = () => {
  return (
    <section className="p-6 mt-6 max-w-screen-xl mx-auto">
      <HeadingBox />
      {/* Bento starts from here */}
      <div className="grid grid-cols-12 grid-flow-dense gap-4 w-full mb-8">
        <Hero />
        <Welcome />
        <PortfolioLink />
        <Socials />
        <Projects />
        <SlideUpBox className="bg-zinc-100">
          <p className="text-center font-bold text-4xl">END</p>
        </SlideUpBox>
      </div>
      <SlideUp>
        <Footer />
      </SlideUp>
    </section>
  );
};

export default BentoGrid;
