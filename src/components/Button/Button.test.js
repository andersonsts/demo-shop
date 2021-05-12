import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Button from '.'

describe('Button component', () => {
  it('should render Button component', () => {
    render(<Button />)

    expect(screen.getByTestId('button-container')).toBeTruthy()
  })

  it('should disable button when loading prop is true', () => {
    render(<Button loading={true} />)

    expect(screen.getByTestId('button-container')).toBeDisabled()
  })

  it('should disable button when disable prop is true', () => {
    render(<Button disabled={true} />)

    expect(screen.getByTestId('button-container')).toBeDisabled()
  })

  it('should show loader when loading prop is true', () => {
    render(<Button loading={true} />)

    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })

  it('should show children of button correctly', () => {
    render(<Button>Continuar</Button>)

    expect(screen.getByText('Continuar')).toBeInTheDocument()
  })
})