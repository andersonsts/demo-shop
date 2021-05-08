import styled from 'styled-components';
import { colors } from '../../styles/globals';

export const Container = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;

  & + button {
    margin-left: 24px;
  }

  > svg {
    color: ${colors.red};
  }

  span {
    color: ${colors.red};
    font-size: 14px;
    margin-left: 8px;
    margin-right: 20px;
    font-weight: normal;
  }
`

export const Icon = styled.div`
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    font-size: 13px;
    border: 1px solid ${colors.red};
    border-radius: 50%;
    font-weight: bold;
    color: ${colors.red}
  }

  > svg {
    color: ${colors.red};
    width: 22px;
    height: 22px;
  }
` 