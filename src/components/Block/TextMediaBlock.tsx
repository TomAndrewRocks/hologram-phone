import { colors, devices } from "@/styles/foundation";
import { Player } from "@lottiefiles/react-lottie-player";
import styled from "styled-components";

interface TMBProps {
  text: string;
  image: string | object;
  shouldReverse?: boolean;
}

export const TextMediaBlock = (props: TMBProps) => {
  return (
    <Container>
      {!props.shouldReverse ? (
        <>
          <p>{props.text}</p>
          <Player
            src={props.image}
            className="player"
            loop
            autoplay
            style={{ height: "110%", width: "110%" }}
          />
        </>
      ) : (
        <>
          <Player
            src={props.image}
            className="player"
            loop
            autoplay
            style={{ height: "  100%", width: " 100%" }}
          />
          <p>{props.text}</p>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.white};
  max-width: 800px;
  padding: 20px;
  border-radius: 20px;
  margin: 50px 0;
 gap: 50px;
  p {
    text-align: justify;
    color: ${colors.black};
    font-weight: bold;
  }

  @media screen and (${devices.lg}) {
    flex-direction: column;
    max-width: 300px;
  }
`;
