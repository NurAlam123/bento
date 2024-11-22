import Box from "./Box";

const Spotify = () => {
  const songURI = "https://open.spotify.com/embed/track/0SccFtYdj75y6lL2OW10Cf";
  return (
    <Box boxVariant="image">
      <iframe
        className="border-none rounded-xl"
        src={`${songURI}?utm_source=generator&theme=0`}
        width="100%"
        height="152"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </Box>
  );
};

export default Spotify;
