import { css } from "styled-components";

export const creditCard = (breakpoints) => css`
  .rccs {
    width: 364px !important;
    height: 223px !important;
    margin-top: 32px !important;
    top: 80px !important;

    .rccs__number {
      font-size: 24px !important;
    }
  }

  @media (max-width: ${breakpoints.lg}) {
    .rccs {
      position: absolute !important;
      left: 50% !important;
      top: auto !important;
      transform: translate(-50%, 50%) !important;
      width: 324px !important;
      height: 200px !important;
    }

    .rccs__number {
      font-size: inherit !important;
    }
  }

  .rccs__card {
    width: 100% !important;
    height: 100% !important;
  }
`
