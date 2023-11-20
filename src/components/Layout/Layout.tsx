import React from "react";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
`;
