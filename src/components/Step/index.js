import { FaCheckCircle, FaChevronRight } from 'react-icons/fa'

import { Container, Icon } from './styles'

const Step = ({ 
  checked = true, 
  stepName = 'Carrinho', 
  stepNumber = 2,
  dontArrow = false,
  onClickStep = () => null
}) => {
  return (
    <Container onClick={onClickStep}>
      <Icon>  
        {checked 
          ? <FaCheckCircle />
          : <div>{stepNumber}</div>
        }
      </Icon>
      <span>{stepName}</span>
      {!dontArrow && (
        <FaChevronRight />
      )}
    </Container>
  )
}

export default Step;