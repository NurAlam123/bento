import { Discord, Github, Gmail, LinkedIn, XSocial } from "@/assets/svgs";
import { LinkBox, Title } from "../ui";

const Socials = () => {
  return (
    <>
      <Title text="&#x1F4F1; Socials" />
      {/* Email */}
      <LinkBox
        href="mailto:nuralam.rsc@gmail.com"
        className="col-span-12 p-8 bg-white flex justify-center"
      >
        <Gmail className="size-24" />
      </LinkBox>
      {/* Github */}
      <LinkBox
        href="https://github.com/NurAlam123"
        className="col-span-6 p-8 bg-black flex justify-center"
      >
        <Github className="size-24" />
      </LinkBox>
      {/* Discord */}
      <LinkBox
        href="https://discord.com/users/838836138537648149"
        className="col-span-6 p-8 bg-[#5865F2] flex justify-center"
      >
        <Discord className="size-24 fill-white" />
      </LinkBox>
      {/* X/Twitter */}
      <LinkBox
        href="https://x.com/nur_alam_404"
        className="col-span-6 bg-black flex justify-center"
      >
        <XSocial className="size-24" />
      </LinkBox>
      {/* LinkedIn */}
      <LinkBox
        href="https://www.linkedin.com/in/nur-alam404"
        className="col-span-6 bg-[#0A66C2] flex justify-center"
      >
        <LinkedIn className="size-24 fill-white" />
      </LinkBox>
    </>
  );
};

export default Socials;
