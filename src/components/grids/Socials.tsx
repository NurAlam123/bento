import { Discord, Github, Gmail, LinkedIn, XSocial } from "@/assets/svgs";
import { Box, Title } from "../ui";

const Socials = () => {
  return (
    <>
      <Title text="&#x1F4F1; Socials" />
      {/* Email */}
      <Box className="col-span-12 p-8 bg-white flex justify-center">
        <a target="_blank" href="mailto:nuralam.rsc@gmail.com">
          <Gmail className="size-24" />
        </a>
      </Box>
      {/* Github */}
      <Box className="col-span-6 p-8 bg-black flex justify-center">
        <a target="_blank" href="https://github.com/NurAlam123">
          <Github className="size-24" />
        </a>
      </Box>
      {/* Discord */}
      <Box className="col-span-6 p-8 bg-[#5865F2] flex justify-center">
        <a target="_blank" href="https://discord.com/users/838836138537648149">
          <Discord className="size-24 fill-white" />
        </a>
      </Box>
      {/* X/Twitter */}
      <Box className="col-span-6 bg-black flex justify-center">
        <a target="_blank" href="https://x.com/nur_alam_404">
          <XSocial className="size-24" />
        </a>
      </Box>
      {/* LinkedIn */}
      <Box className="col-span-6 bg-[#0A66C2] flex justify-center">
        <a target="_blank" href="https://www.linkedin.com/in/nur-alam404">
          <LinkedIn className="size-24 fill-white" />
        </a>
      </Box>
    </>
  );
};

export default Socials;
