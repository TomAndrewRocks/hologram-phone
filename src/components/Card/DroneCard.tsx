import styled from "styled-components";
import { devices } from "@/styles/foundation";
import { Player } from "@lottiefiles/react-lottie-player";

interface DroneCardProps {
  image: string;
  title: string;
}

const DroneCard = (props: DroneCardProps) => {
  return (
    <CardWrapper>
      <CardContainer>
        <Player
          src={props.image}
          className="player"
          loop
          autoplay
          style={{ width: " 100%", height: "auto" }}
        />
      </CardContainer>
      <Description>{props.title}</Description>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 40px;
  gap: 30px;

  @media screen and (${devices.md}) {
    flex-direction: column;
  }
`;

const CardContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0e0e0;
`;

const Description = styled.p`
  margin-top: 10px;
  text-align: center;
  color: #858585;
`;

export default DroneCard;
