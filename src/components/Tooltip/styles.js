import styled from 'styled-components'

import { colors } from '@demo-shop/styles/globals'

export const Container = styled.div`
  pointer-events: auto;
  margin-left: 8px;
  margin-bottom: -2px;
  position: relative;

  &:hover {
    small {
      opacity: 1;
      visibility: visible;
    }
  }

  small {
    transition: all 0.2s ease-in-out;
    position: absolute;
    visibility: hidden;
    background: ${colors.black};
    color: ${colors.white};
    border-radius: 4px;
    display: flex;
    opacity: 0;
    align-items: center;
    justify-items: center;
    font-size: 12px;
    text-align: center;
    top: 50%;
    padding: 8px;
    left: 50%;
    transform: translate(-50%, -140%);
    margin-bottom: -2px;

    &:before { 
      content:'';
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 0;
      height: 0;
      border-top: 5px solid ${colors.black};
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      top: 43px;
    }
  }
`