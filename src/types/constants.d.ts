type ProjectType = {
  title: string;
  description: string;
  image: {
    src: string;
    height: number;
    width: number;
    alt: string;
  };
  techs: Array<string>;
  links: {
    github: string;
    live: string;
  };
};
type ProjectsType = Array<ProjectType>;
