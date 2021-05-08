import styled, { css } from 'styled-components'
import { colors } from '../../styles/globals'

export const ContainerButton = styled.button`
  width: 100%;
  max-width: 246px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.red};
  color: ${colors.white};
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border: none;
  transition: all 0.2s ease-in-out;

  ${props => props.disabled && css`
    cursor: not-allowed;
    opacity: 0.8;
  `}

  &:enabled:hover {
    filter: brightness(0.96);
    cursor: pointer;
  }
`