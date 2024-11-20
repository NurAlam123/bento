import Image from "next/image";
import Box from "./Box";

const BentoGrid = () => {
  return (
    <section className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-center mb-8">
        <Image
          src="/avatar.jpg"
          alt="Avatar"
          width={128}
          height={128}
          className="border-2 border-zinc-300 rounded-full"
        />
      </div>
      {/* Bento starts from here */}
      <div className="grid grid-cols-12 gap-4 w-full">
        <Box>HI THIS IS A BENTO BOX</Box>
      </div>
    </section>
  );
};

export default BentoGrid;
