import { createGlobalStyle } from 'styled-components';

export const COLORS = {
  // color pallete source: https://palettes.shecodes.io/palettes/320
  darkGray: '#303841',
  midGray: '#3a4750',
  lightGray: '#d3d6db',
  red: '#be3144',
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: linear-gradient(
      to right top,
      #b8b1b3,
      #979095,
      #747078,
      #52535c,
      #303841
    );
    color: ${COLORS.lightGray};
    font-family: Open-Sans, Helvetica, Sans-Serif;
    .title {
      color: ${COLORS.red}
    }
  }
`;

export default GlobalStyle;
