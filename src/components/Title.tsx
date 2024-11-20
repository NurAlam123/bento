const Title = ({ text }: { text: string }) => {
  return (
    <h3 className="text-3xl font-semibold my-4 text-zinc-800 col-span-12">
      {text}
    </h3>
  );
};

export default Title;
