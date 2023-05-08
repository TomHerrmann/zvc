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
`;

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <StyledLayout>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </StyledLayout>
  );
}
