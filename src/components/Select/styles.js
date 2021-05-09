import styled from 'styled-components';
import { colors } from '@demo-shop/styles/globals';

export const Container = styled.div`
  width: 100%;
  height: 32px;
  position: relative;

  select {
    height: 100%;
    width: 100%;
    border: none;
    border-bottom: 1px solid ${props => props.error ? colors.red : colors.gray};
    background-color: transparent;
    font-size: 17px;
    -webkit-appearance: none;
    color: ${props => props.isFilled ? colors.black : colors.gray};
    outline: none;

    &:-ms-expand {
      display: none;
    }

    option:nth-child(1) {
      color: ${colors.gray};
    }

    option {
      color: ${colors.black};
    }
  }

  svg {
    position: absolute;
    right: 0;
    top: 0.5rem;
    color: ${colors.red};
  }
`;