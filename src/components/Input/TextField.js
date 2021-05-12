import ErrorContainer from '@demo-shop/components/ErrorContainer'

import { Container } from './styles'

const Input = ({ name, value, label, error, ...rest }) => {
  const isFilled = value !== '' 

  return (
    <Container isFilled={isFilled} error={error}>
      <input 
        type="text" 
        name={name} 
        value={value} 
        {...rest}
      />
      
      <label htmlFor={name}>
        {label}
      </label>
      {!!error && (
        <ErrorContainer>
          {error}
        </ErrorContainer>
      )}
    </Container>
  )
}

export default Input;