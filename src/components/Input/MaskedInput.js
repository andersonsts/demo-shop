import InputMask from 'react-input-mask'

import Tooltip from '../Tooltip'
import ErrorContainer from '../ErrorContainer'

import { Container } from './styles'

const MaskedInput = ({ 
  name, 
  value, 
  label, 
  mask = '99/99', 
  error, 
  infoMessage = '',
  ...rest 
}) => {
  const isFilled = value !== '' 

  return (
    <Container isFilled={isFilled} error={error}>
      <InputMask
        type="text" 
        mask={mask} 
        name={name} 
        value={value} 
        maskChar={null}
        {...rest}
      />
      <label htmlFor={name}>
        {label}
        {!!infoMessage && <Tooltip message={infoMessage} />}
      </label>
      {!!error && (
        <ErrorContainer>{error}</ErrorContainer>
      )}
    </Container>
  )
}

export default MaskedInput;