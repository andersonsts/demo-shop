import Loader from "react-loader-spinner";

import { colors } from '../../styles/globals';
import { ContainerButton } from './styles'

const Button = ({ children, loading = false, disabled = false, ...rest }) => {
  return (
    <ContainerButton type='button' disabled={disabled || loading} { ...rest }>
      {loading ? (
        <Loader
          type="TailSpin"
          color={colors.white}
          height={28}
          width={28}
        />
      ) : (
        children
      )}
    </ContainerButton>
  )
}

export default Button;