import Box from "../Box";
import Section from "../Section";

const Welcome = () => {
  return (
    <Section title="&#x1F44B; Welcome">
      <Box className="text-zinc-600">
        <p className="text-xl">
          Hi, I am{" "}
          <span className="text-2xl text-black">
            <strong>Nur Alam.</strong>
          </span>
          <br />
          You can call me Nur.
          <br />
          And welcome to my own bento grid layout.
        </p>
      </Box>
    </Section>
  );
};

export default Welcome;
