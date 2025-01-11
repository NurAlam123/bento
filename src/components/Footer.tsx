import { ArrowUpRight } from "@/assets/icons";
import { pageGithub } from "@/constants";
import { myPortfolioLink } from "@/constants/socials";
import FooterYear from "./ui/FooterYear";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between text-zinc-700 md:items-center">
      <div>
        <h4 className="text-3xl text-zinc-800 font-medium mb-2">Lightento</h4>
        <p className="text-md">
          Nur Alam &copy; <FooterYear />
        </p>
      </div>
      <div className="flex gap-6 *:underline *:underline-offset-2 *:flex *:relative">
        <a href={pageGithub} target="_blank">
          Github
          <span className="absolute -top-2 -right-3">
            <ArrowUpRight className="w-4" />
          </span>
        </a>
        <a href={myPortfolioLink} target="_blank">
          Portfolio{" "}
          <span className="absolute -top-2 -right-3">
            <ArrowUpRight className="w-4" />
          </span>
        </a>
        <a href={`${myPortfolioLink}/#contact`} target="_blank">
          Contact
          <span className="absolute -top-2 -right-3">
            <ArrowUpRight className="w-4" />
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
