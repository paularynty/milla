import React from "react";

import styled from "styled-components";

const Wrapper = styled.section`
  padding: 120px 24px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 64px;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  max-width: 640px;
  margin: 0 auto 32px;
`;

const Cta = styled.a`
  display: inline-block;
  padding: 12px 24px;
  border: 1px solid black;
`;

export const Hero: React.FC = () => {
  return (
    <Wrapper>
      <Title>Reclaim. Reinvent. ReYou.</Title>
      <Subtitle>
        Become the best version of yourself.
      </Subtitle>
      <Cta href="/education">Begin the journey</Cta>
    </Wrapper>
  );
};
