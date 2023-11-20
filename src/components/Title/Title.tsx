import styled from "styled-components";
import { colors, devices, sizes } from "@/styles/foundation";

export const Title = () => {
  return <H1>Sem Smartphone, <br/> Sem Problemas!</H1>;
};

const H1 = styled.h1`
  text-align: center;
  color: ${colors.black};
  font-size: ${sizes[0].fonts.xl};
  letter-spacing: ${sizes[0].fonts.xs};
  @media screen and (${devices.md}) {
    font-size: ${sizes[0].fonts.md};
  }
`;
