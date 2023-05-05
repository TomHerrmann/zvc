import React, { ReactNode } from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyles';
import Header from './Header';

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 0;
  display: flex;
  flex-direction: column;
  #main-content {
    width: 100%;
    max-width: 62.5rem;
    margin: 0 auto;
    padding: 0 2.5rem;
  }
`;

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <StyledLayout>
      <GlobalStyle />
      <Header />
      <main id="main-content">{children}</main>
      {/* <Footer /> */}
    </StyledLayout>
  );
}
