import { Content } from './styles'

const ErrorContainer = ({ children }) => {
  return (
    <Content data-testid='error-container'>{children}</Content>
  )
}

export default ErrorContainer;