import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    box-sizing: border-box;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-image: -webkit-linear-gradient(top, #f2f2f2, #e6e6e6);
    background-image: linear-gradient(top, #f2f2f2, #e6e6e6);
    line-height: 1.25;
    font-family: ${theme.fonts.base};
    background-attachment: fixed;
  }
`;

export default GlobalStyle;
