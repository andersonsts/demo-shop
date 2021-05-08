import { FaCheckCircle } from 'react-icons/fa';

import { Container } from './styles'

const iconByMessageType = {
  success: <FaCheckCircle />
}

const Alert = ({ message = '', type = 'success', show = false }) => {
  return (
    <Container 
      show={show}
      type={type}  
    >
      {iconByMessageType[type]}
      <span>
        {message}
      </span>
    </Container>
  )
}

export default Alert;