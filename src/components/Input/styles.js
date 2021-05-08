import styled, { css } from 'styled-components'
import { colors } from '../../styles/globals';

export const Container = styled.div`
  width: 100%;
  height: 32px;
  position: relative;

  input {
    height: 100%;
    width: 100%;
    border: none;
    color: ${colors.black};
    font-size: 17px;
    border-bottom: 1px solid ${props => props.error ? colors.red : colors.gray}; 
    outline: none;
    padding: 16px 0px;
    font-weight: normal;
    letter-spacing: 1px;
    word-spacing: 4px;

    ${props => props.isFilled && css`
      & ~ label {
        transform: translateY(-23px);
        font-size: 13px;

        svg {
          font-size: 11px;
        }
      }
    `}

    &:focus ~ label {
      transform: translateY(-23px);
      font-size: 13px;
      font-weight: normal;

      svg {
        font-size: 11px;
      }
    }
  }

  label {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 6px;
    font-size: 17px;
    left: -1px;
    color: ${colors.gray};
    pointer-events: none;
    font-weight: normal;
    transition: all 0.2s ease-in-out;

    svg {
      transition: all 0.2s ease-in-out;
      font-size: 14px;
    }
  }
`;