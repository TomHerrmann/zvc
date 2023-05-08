import React from 'react';
import styled from 'styled-components';
import { COLORS } from './GlobalStyles';

const SyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3em;
  position: sticky;
`;

const H1 = styled.h1`
  margin: 20px;
`;

const LinkGroup = styled.div`
  margin-right: 20px;
`;

const Link = styled.a`
  color: ${COLORS.lightGray};
  margin-right: 8px;
  padding: 6px;
  &:hover {
    color: ${COLORS.red};
  }
`;

export default function Header() {
  return (
    <SyledHeader>
      <H1 className="title">
        ZVC{' '}
        <span role="img" aria-label="emoji">
          🦇
        </span>
      </H1>
      <LinkGroup>
        <Link href="#">Home</Link>
        <Link href="#">Buy Tickets</Link>
        <Link href="#">Podcast</Link>
        <Link href="#">About Us</Link>
        <Link href="#">Contact</Link>
      </LinkGroup>
    </SyledHeader>
  );
}
