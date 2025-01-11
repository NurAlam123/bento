import { socialLinks } from "@/constants/socials";
import { LinkBox, Title } from "../ui";

const Socials = () => {
  return (
    <>
      <Title emoji="&#x1F4F1;" text="Socials" />

      {/* Email */}
      <LinkBox
        href={socialLinks.gmail.href}
        className="col-span-12 p-8 bg-white flex justify-center"
      >
        <socialLinks.gmail.icon className="size-24" />
      </LinkBox>

      {/* Github */}
      <LinkBox
        href={socialLinks.github.href}
        className="col-span-6 p-8 bg-black flex justify-center"
      >
        <socialLinks.github.icon className="size-24" />
      </LinkBox>

      {/* Discord */}
      <LinkBox
        href={socialLinks.discord.href}
        className="col-span-6 row-span-2 p-8 bg-[#5865F2] flex justify-center items-center"
      >
        <socialLinks.discord.icon className="size-24 fill-white" />
      </LinkBox>

      {/* X/Twitter */}
      <LinkBox
        href={socialLinks.x.href}
        className="col-span-6 bg-black flex justify-center"
      >
        <socialLinks.x.icon className="size-24" />
      </LinkBox>
    </>
  );
};

export default Socials;
