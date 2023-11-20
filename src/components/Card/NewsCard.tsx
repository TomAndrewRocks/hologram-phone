import { colors, devices } from "@/styles/foundation";
import styled from "styled-components";

interface CardProps {
  image: string;
  title: string;
  link: string;
}

const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 10px;
  width: 100%;
  max-width: 400px;
  background-color: white;
  height: 300px;

  a {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;

    @media screen and (${devices.md}) {
      width: 100%;
      max-width: 400px;
    }
  }

  h3 {
    margin: 0;
    padding: 10px;
    font-size: 16px;
    color: ${colors.black};
    text-align: center;
    flex: 1;
  }

  span {
    margin: 0;
    padding: 10px;
    font-size: 10px;
    color: ${colors.pink};
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  @media screen and (${devices.lg}) {
    flex-direction: column;
    max-width: 300px;
  }
`;

export const NewsCard = (props: CardProps) => {
  return (
    <CardContainer>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <span children={"Clique aqui e saiba mais"} />
      </a>
    </CardContainer>
  );
};
