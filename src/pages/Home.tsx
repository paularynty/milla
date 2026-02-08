import { Hero } from "../components/Hero";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Home = () => {
  return (
    <Root>
      <Hero />
    </Root>
  );
};
