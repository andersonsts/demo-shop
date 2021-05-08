import { BsInfoCircleFill } from 'react-icons/bs'

import { Container } from './styles'

export const Tooltip = ({ message = '' }) => {
  return (
    <Container>
      <BsInfoCircleFill />
      <small>{message}</small>
    </Container>
  )
} 

export default Tooltip