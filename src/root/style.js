import { css, createGlobalStyle } from "styled-components";

export const globalContainer = css`
  @media screen and (max-width: 1600px) {
    width: 94%;
  }

  @media screen and (min-width: 1601px) {
    width: 1230px;
  }
`;

export const globalButton = css`
  border: none;
  text-decoration: none;
  padding: 10px 28px;
  border-radius: 8px;
  background-color: #1b5bf7;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  transition: 0.2s linear;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const GlobalStyles = createGlobalStyle`
    /* Universal selector */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    /* Style HTML */
    html {
        scroll-behavior: smooth;
    }
    /* Style Body */
    body {
        font-family: "Roboto", sans-serif;
        background-color: #fff;
        color: #18191F;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
    }
    /* Style Scrollbar and Selection */
    ::-webkit-scrollbar {
        width: 6px;
        height: 10px;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 1px 1px 2px rgba(27, 91, 247, 0.75);
    }
    ::-webkit-scrollbar-thumb {
        background-color: #1B5BF7;
        border: 2px solid transparent;
    }
    *::selection {
        background: #1B5BF7;
        color: #fff;
        text-shadow: none;
    }
`;
