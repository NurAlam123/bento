import Image from "next/image";
import { Box, LinkBox, Title } from "../ui";
import { projects } from "@/constants";
import { LinkChain } from "@/assets/icons";
import { Github } from "@/assets/svgs";

const Projects = () => {
  return (
    <>
      <Title text="&#x1F42C; Projects" />
      {projects.map((project, index) => (
        <Box boxVariant="section" key={index}>
          <Box boxVariant="image">
            <Image
              key={project.title}
              src={project.image.src}
              width={project.image.width}
              height={project.image.height}
              alt={project.image.alt}
              className="image w-full object-cover"
            />
          </Box>
          <Box className="md:col-span-10 p-0 border-none" boxVariant="section">
            <Box className="text-xl font-semibold flex items-center">
              {project.title}
            </Box>
            <Box className="text-md text-zinc-800">{project.description}</Box>
          </Box>
          <Box className="md:col-span-2 p-0 border-none" boxVariant="section">
            {project.links.live && (
              <LinkBox
                href={project.links.live}
                className="col-span-6 md:col-span-full flex justify-center items-center bg-blue-400 text-white"
              >
                <LinkChain /> <span className="font-bold ms-2">Live</span>
              </LinkBox>
            )}
            {project.links.github && (
              <LinkBox
                href={project.links.github}
                className="col-span-6 md:col-span-full flex justify-center items-center bg-black fill-white"
              >
                <Github className="size-6" />
              </LinkBox>
            )}
          </Box>
          <Box>{project.techs.join(", ")}</Box>
        </Box>
      ))}
    </>
  );
};

export default Projects;
