import ErrorContainer from '@demo-shop/components/ErrorContainer'

import { Container } from './styles'

const Input = ({ name, value, label, error, ...rest }) => {
  const isFilled = value !== '' 

  return (
    <Container isFilled={isFilled} error={error} data-testid='text-field-container'>
      <input
        data-testid='text-input'
        type="text" 
        name={name} 
        value={value} 
        {...rest}
      />
      
      <label htmlFor={name} data-testid='label-input'>
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