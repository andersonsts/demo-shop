import { createGlobalStyle } from "styled-components";
import { creditCard } from './credit-card'

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

  @media (max-width: ${breakpoints.lg}) {
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

  ${creditCard(breakpoints)}
`


