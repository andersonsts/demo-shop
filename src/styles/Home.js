import styled from 'styled-components'
import { breakpoints } from './globals'

export const MainContainer = styled.div`
  width: 100%;
  padding: 0 6rem;
  display: flex;
  height: 550px;
  margin-top: 3rem;

  @media (max-width: ${breakpoints.lg}) {
    padding: 0px;
    margin: 0px;
  }
`