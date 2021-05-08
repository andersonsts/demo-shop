import styled from 'styled-components'

import { breakpoints, colors } from '../../styles/globals'

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  height: 5rem;
  justify-content: space-between;
  padding: 1rem 6rem;
  border-bottom: 1px solid ${colors.gray};

  @media (max-width: ${breakpoints.lg}) {
    display: none;
  }

  div:first-child {
    img {
      transform: scale(0.82);
    }
  }

  div:last-child {
    display: flex;
    align-items: center;
    
    span {
      width: 6rem;
      height: 1.2rem;
      background: ${colors.black};
      border-radius: 5px;
      opacity: 0.4;

      & + span {
        margin-left: 1.6rem;
      }
    }
  }
`