import React from "react";
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-width: 100%;
  background-color: rebeccapurple;
`;

export const Home: React.FC = () => {
  return (
    <Root>
      <Navigation />
      <Hero />
    </Root>
  );
};
