import { ArrowUpRight } from "@/assets/icons";
import { LinkBox } from "../ui";

const PortfolioLink = () => {
  return (
    <LinkBox
      href="https://nuralam.vercel.app"
      className="flex justify-center items-center bg-[#6090E8]"
    >
      <div className="text-4xl flex gap-4 items-center">
        <p>&#x1F468;&#x200D;&#x1F4BB;</p>
        <p className="font-semibold text-white">Portfolio</p>
        <ArrowUpRight className="text-white" />
      </div>
    </LinkBox>
  );
};

export default PortfolioLink;
