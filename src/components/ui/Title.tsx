import { TextSlideIn } from "../animaiton/text-animaiton";

const Title = ({ text, emoji }: { text: string; emoji?: string }) => {
  return (
    <h3 className="text-3xl font-semibold my-4 text-zinc-800 col-span-12 flex items-center gap-4">
      <span>{emoji}</span>
      <TextSlideIn>{text}</TextSlideIn>
    </h3>
  );
};

export default Title;
