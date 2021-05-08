import { Container } from './styles'

const Wrapper = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      {children}
    </Container>
  )
}

export default Wrapper;