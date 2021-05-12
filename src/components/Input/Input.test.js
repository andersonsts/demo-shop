import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { MaskedInput, TextField as Input } from '.'

describe('Input component', () => {
  it('should render input component', () => {
    render(<Input />)

    expect(screen.getByTestId('text-field-container')).toBeTruthy()
  })

  it('should show error container if h  as error', () => {
    render(<Input error='Erro ao inserir o dado' />)

    expect(screen.getByTestId('error-container')).toBeInTheDocument()
  })

  it('should not perform the effect when the input is filled', () => {
    const { getByTestId } = render(<Input />)
    const inputEl = getByTestId('text-input')
    fireEvent.change(inputEl, { target: { value: 'test' } })
    expect(inputEl.value).toBe('test')
    expect(getByTestId('label-input')).toHaveStyle('font-size: 17px')
  })

  it('should perform the effect when the input is filled', () => {
    const { getByTestId } = render(<Input />)
    const inputEl = getByTestId('text-input')
    fireEvent.change(inputEl, { target: { value: 'test' } })
    expect(inputEl.value).toBe('test')
    expect(getByTestId('label-input')).toHaveStyle('transform: translateY(-23px)')
  })

  it('should apply mask in value', () => {
    const { getByTestId } = render(<MaskedInput mask='999 99' maskChar={null}/>)
    const inputEl = getByTestId('text-input')
    fireEvent.change(inputEl, { target: { value: '12345' } })
    expect(inputEl.value).toBe('123 45')
  })
})