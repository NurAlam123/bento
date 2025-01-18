import { ArrowUpRight } from "@/assets/icons";
import { LinkBox } from "../ui";
import { myPortfolioLink } from "@/constants/socials";

const PortfolioLink = () => {
  return (
    <LinkBox
      href={myPortfolioLink}
      className="flex justify-center relative items-center bg-[#6090E8] group overflow-hidden"
    >
      <div className="absolute size-0 -top-4 left-1/2 -translate-y-1/2 group-hover:size-96 scale-100 group-hover:scale-[5] bg-black  transition-all duration-700 rounded-full" />
      <div className="text-4xl flex gap-4 items-center z-10 group-hover:scale-110 transition duration-300">
        <p>&#x1F468;&#x200D;&#x1F4BB;</p>
        <p className="font-semibold text-white">Portfolio</p>
        <ArrowUpRight className="text-white" />
      </div>
    </LinkBox>
  );
};

export default PortfolioLink;
