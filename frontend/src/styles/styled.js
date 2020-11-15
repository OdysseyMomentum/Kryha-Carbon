import { createGlobalStyle } from "styled-components";
import colors from "./color";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
  }
  root {
    height: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Inter', sans-serif;
    color: ${colors.neon};
    background-color: ${colors.lightPurple};
    margin: 0;
    height: 100%;
  }
  :focus {
    outline: none;
  }
  .tooltip{
    width: 200px;
    border-radius: 4;
  }
`;

export { GlobalStyle };
