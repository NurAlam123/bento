import { cerebromashLab, cogni, natala, ycDirectory } from "@/assets/projects";

export const projects = [
  {
    title: "CerebroMesh Labs",
    description:
      "CerebroMesh Labs is a Next.js based landing page which provides high-quality curated datasets to enhance your AI.",
    image: {
      src: cerebromashLab.src,
      height: cerebromashLab.height,
      width: cerebromashLab.width,
      alt: "CerebroMesh Labs",
    },
    techs: ["Next.js", "Tailwnd CSS"],
    links: {
      github: "",
      live: "https://cerebromesh-labs-ten.vercel.app/",
    },
  },
  {
    title: "Natala",
    description:
      "Natala, a modern responsive saas landing page built with Next.js, Tailwind CSS, Framer Motion. This project showcases a sleek design with smooth animations and a mobile-first approach.",
    image: {
      src: natala.src,
      height: natala.height,
      width: natala.width,
      alt: "Natala",
    },
    techs: ["Next.js", "Tailwnd CSS", "Framer Motion"],
    links: {
      github: "https://github.com/nuralam123/natala",
      live: "https://natala.vercel.app/",
    },
  },
  {
    title: "Cogni",
    description:
      "Congi is an AI landing page with sleek design and animaiton. Made with Next.js, Tailwind CSS, Framer Motion",
    image: {
      src: cogni.src,
      height: cogni.height,
      width: cogni.width,
      alt: "Congi",
    },
    techs: ["Next.js", "Tailwnd CSS", "Framer Motion"],
    links: {
      github: "https://github.com/nuralam123/Cogni",
      live: "https://cogni-tau.vercel.app/",
    },
  },
  {
    title: "YC Directory",
    description:
      "A modern Full Stack app for the new era for startups. Submit your ideas, vote on pitches and get noticed in virtual competition. Pitch, Vote, Grow",
    image: {
      src: ycDirectory,
      height: ycDirectory.height,
      width: ycDirectory.width,
      alt: "YC Directory",
    },
    techs: ["Next.js", "Shadcn", "Sanity", "Tailwnd CSS", "React.js"],
    links: {
      github: "https://github.com/nuralam123/yc-directory",
      live: "https://yc-directory-rho.vercel.app/",
    },
  },
];
