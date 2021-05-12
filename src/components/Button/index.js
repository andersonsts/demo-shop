
import Loading from './loader';

import { ContainerButton } from './styles'

const Button = ({ children, loading = false, disabled = false, ...rest }) => {
  return (
    <ContainerButton data-testid='button-container' type='button' disabled={disabled || loading} { ...rest }>
      {loading 
        ? <Loading />
        : children
      }
    </ContainerButton>
  )
}

export default Button;