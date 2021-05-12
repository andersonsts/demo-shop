import Loader from "react-loader-spinner";

import { colors } from '@demo-shop/styles/globals';

const Loading = ({ ...props }) => (
  <div data-testid='loader'>
    <Loader
      type="TailSpin"
      color={colors.white}
      height={28}
      width={28}
      {...props}
    />
  </div>
)

export default Loading;