
import Loader from "react-loader-spinner";

import { colors } from '@demo-shop/styles/globals';

import { Wrapper } from './styles'

const Loading = ({ ...props }) => (
  <Wrapper data-testid='loader'>
    <Loader
      type="TailSpin"
      color={colors.white}
      height={28}
      width={28}
      {...props}
    />
  </Wrapper>
)

export default Loading;