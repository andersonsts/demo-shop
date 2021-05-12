import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${props => `repeat(${props.cell || 1}, 1fr)`};
  column-gap: ${props => `${props.gap || 16}px`};

  & + div {
    margin-top: 46px;
  }
`