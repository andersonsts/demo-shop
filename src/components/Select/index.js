import { FaChevronDown } from 'react-icons/fa'

import ErrorContainer from '../ErrorContainer'

import { Container } from './styles'

const Select = ({ name = '', error, value, label = '', options = [], ...rest }) => {
  const isFilled = !!value 

  return (
    <Container isFilled={isFilled} error={error}>
      <select 
        id={name}
        name={name} 
        value={value}
        {...rest}
      >
        <option value="" disabled>{label}</option>
        {options.map(option => 
          <option key={option.value} value={option.value}>{option.description}</option>
        )}
      </select>

      <FaChevronDown />

      {!!error && (
        <ErrorContainer>{error}</ErrorContainer>
      )}
    </Container>
  )
}

export default Select;