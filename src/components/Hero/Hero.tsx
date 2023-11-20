import { Player } from "@lottiefiles/react-lottie-player";

export const Hero = () => {
  return (
    <Player
      className="player"
      loop
      autoplay
      style={{ height: "35%", width: "35%" }}
      src={
        "https://lottie.host/2e403537-41a9-441e-8d1d-f879335b7070/4KUIbJUhBb.json"
      }
    />
  );
};
