import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${props => `repeat(${props.cell || 1}, 1fr)`};
  column-gap: 16px;

  & + div {
    margin-top: 46px;
  }
`