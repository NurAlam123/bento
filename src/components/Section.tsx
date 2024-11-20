import { twMerge } from "tailwind-merge";

const Section = ({
  title,
  children,
  className,
}: {
  title: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={twMerge("col-span-12", className)}>
      <h3 className="text-3xl font-semibold mb-4 text-zinc-800">{title}</h3>
      {children}
    </section>
  );
};

export default Section;
