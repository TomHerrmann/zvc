import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    margin-top: 0;
  }
`;

export default function Hero() {
  return (
    <StyledSection id="hero">
      <h1 className="title">
        Zero Vision Cinema
        <span role="img" aria-label="emoji">
          🦇
        </span>
      </h1>
      <h2 className="subtitle">
        See movies on the big screen in bars and breweires around NYC
      </h2>
      <p className="description">We like movies a lot</p>
    </StyledSection>
  );
}
