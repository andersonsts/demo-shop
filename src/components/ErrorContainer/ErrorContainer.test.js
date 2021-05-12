import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ErrorContainer from '.'

describe('ErrorContainer component', () => {
  it('should show children of ErrorContainer correctly', () => {
    render(<ErrorContainer>Insira um o código</ErrorContainer>)

    expect(screen.getByText('Insira um o código')).toBeInTheDocument()
  })
})