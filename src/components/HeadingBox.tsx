import Image from "next/image";

const HeadingBox = () => {
  return (
    <div className="grid place-items-center gap-4 mb-8">
      <Image
        src="/avatar.jpg"
        alt="Avatar"
        width={128}
        height={128}
        className="border-2 border-zinc-300 rounded-full"
      />
      <h1 className="text-4xl font-bold">Nur Alam</h1>
      <p className="text-sm text-zinc-600">
        - Front-End Developer <br />
      </p>
    </div>
  );
};

export default HeadingBox;
