import React from 'react';
import styled from 'styled-components';
import { COLORS } from './GlobalStyles';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 400px;
  position: relative;
  overflow: hidden;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: ${COLORS.darkGray};
  text-align: center;
`;

const StyledH1 = styled.h1`
  color: ${COLORS.red};
  font-size: 5em;
  width: 75%;
  margin-top: 24px;
  margin-bottom: 12px;
`;

const StyledH2 = styled.h2`
  font-size: 2.5em;
  width: 75%;
`;

export default function Hero() {
  return (
    <StyledSection id="hero">
      <StyledH1>
        ZERO VISION CINEMA
        <span role="img" aria-label="emoji">
          🦇
        </span>
      </StyledH1>
      <StyledH2>
        SEE MOVIES ON THE BIG SCREEN IN BARS AND BREWERIES AROUND NYC
      </StyledH2>
    </StyledSection>
  );
}
