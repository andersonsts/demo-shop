import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Header from '.'

describe('Header component', () => {
  it('should render logo image inside header component', () => {
    render(<Header />)

    expect(screen.getByTestId('image-container')).toBeInTheDocument();
  })
})