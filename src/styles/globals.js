import { createGlobalStyle } from "styled-components";

export const colors = {
  white: '#ffffff',
  red: '#DE4B4B',
  black: '#3C3C3C',
  gray: '#C9C9C9',
  main: '#F7F7F7',
  green100: '#ccffcc',
  green200: '#5A7252'
}

export const breakpoints = {
  lg: '1064px'
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  @media (max-width: 1080px) {
  html {
      font-size: 93.75%; // 15px
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: ${colors.main};
  }

  body, input, textarea, button {
    font: 500 1rem Roboto, sans-serif;
  }

  // credit card...
  .rccs {
    width: 324px !important;
    height: 200px !important;
    margin-top: 31px !important;
  }

  @media (max-width: ${breakpoints.lg}) {
    .rccs {
      position: absolute !important;
      left: 50% !important;
      transform: translate(-50%, 50%) !important;
    }
  }

  .rccs__card {
    width: 100% !important;
    height: 100% !important;
  }
`


