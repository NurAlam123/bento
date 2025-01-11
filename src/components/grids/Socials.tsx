import { socialLinks } from "@/constants/socials";
import { LinkBox, Title } from "../ui";

const Socials = () => {
  return (
    <>
      <Title emoji="&#x1F4F1;" text="Socials" />

      {/* Email */}
      <LinkBox
        href={socialLinks.gmail.href}
        className="col-span-12 p-8 bg-white flex justify-center relative overflow-hidden group"
      >
        <div className="absolute size-0 -top-4 -left-4 group-hover:size-96 scale-100 group-hover:scale-[5] bg-zinc-200  transition-all duration-700 rounded-full" />
        <socialLinks.gmail.icon className="size-24 z-[2] transition duration-300 group-hover:scale-105" />
      </LinkBox>

      {/* Github */}
      <LinkBox
        href={socialLinks.github.href}
        className="relative col-span-6 p-8 bg-black flex justify-center overflow-hidden group"
      >
        <div className="absolute size-0 -bottom-4 -left-4 group-hover:size-96 scale-100 group-hover:scale-[5] bg-white  transition-all duration-700 rounded-full" />
        <socialLinks.github.icon className="size-24 z-[2] group-hover:fill-black transition duration-700 group-hover:scale-105" />
      </LinkBox>

      {/* Discord */}
      <LinkBox
        href={socialLinks.discord.href}
        className="relative col-span-6 row-span-2 p-8 bg-[#5865F2] flex justify-center items-center group overflow-hidden"
      >
        <div className="absolute size-0 top-1/2 translate-x-16 -translate-y-1/2 -right-1.5 group-hover:size-96 scale-100 group-hover:scale-[5] bg-white  transition-all duration-700 rounded-full" />
        <socialLinks.discord.icon className="size-24 fill-white group-hover:scale-105 group-hover:fill-[#5865F2] transition duration-700 z-[2]" />
      </LinkBox>

      {/* X/Twitter */}
      <LinkBox
        href={socialLinks.x.href}
        className="col-span-6 bg-black flex justify-center relative overflow-hidden group"
      >
        <div className="absolute size-0 -bottom-4 -left-4 group-hover:size-96 scale-100 group-hover:scale-[5] bg-white  transition-all duration-700 rounded-full" />
        <socialLinks.x.icon className="size-24 fill-white group-hover:scale-105 group-hover:fill-black z-[2] transition duration-700" />
      </LinkBox>
    </>
  );
};

export default Socials;
