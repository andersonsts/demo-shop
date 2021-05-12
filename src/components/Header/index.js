import { HeaderContainer } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <div data-testid='image-container'>
        <img src="/images/logo.svg" alt="Demo Shop Logo"/>
      </div>

      <div data-testid='placeholder-divs'>
        {[...Array(5).keys()].map(fakeItem => (
          <span key={fakeItem} />
        ))}
      </div>
    </HeaderContainer>
  )
}

export default Header;