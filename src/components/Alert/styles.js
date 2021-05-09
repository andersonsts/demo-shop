import styled, { css } from 'styled-components';
import { colors } from '@demo-shop/styles/globals';

const styleByType = {
  success: css`
    background: ${colors.green100};
    color: ${colors.green200};
  `
}

export const Container = styled.div`
  font-size: 18px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 2rem;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0;
  transition: all 0.2s ease-in-out;

  ${props => styleByType[props.type]}

  ${props => props.show && css`
    opacity: 1;
    transform: translate(-50%, 0);
  `}

  svg {
    margin-right: 0.6rem;
    width: 1.3rem;
    height: 1.3rem;
  }
`