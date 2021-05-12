import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Checkout from '.'
import { CHECKOUT_ERROR_MESSAGES } from '@demo-shop/contants/errorMessages/checkoutForm'

describe('Checkout', () => {
  it('should validate invalid card number', async () => {
    render(<Checkout />)
    const numberCardInput = screen.getByTestId('number')
    fireEvent.change(numberCardInput, { target: { value: '1111111111111111' } })
    fireEvent.blur(numberCardInput)
  
    let error;
    await waitFor(() => {
      error = screen.getByText(CHECKOUT_ERROR_MESSAGES.number.invalid)
    })

    expect(error).not.toBeNull();
  })

  it('should validate empty card number', async () => {
    render(<Checkout />)
    const numberCardInput = screen.getByTestId('number')
    fireEvent.change(numberCardInput, { target: { value: '' } })
    fireEvent.blur(numberCardInput)
  
    let error;
    await waitFor(() => {
      error = screen.getByText(CHECKOUT_ERROR_MESSAGES.number.required)
    })

    expect(error).not.toBeNull();
  })

  it('should validate empty name or incomplete name', async () => {
    render(<Checkout />)
    const nameCardInput = screen.getByTestId('name')
    fireEvent.change(nameCardInput, { target: { value: '' } })
    fireEvent.blur(nameCardInput)
  
    let error;
    await waitFor(() => {
      error = screen.getByText(CHECKOUT_ERROR_MESSAGES.name.required)
    })

    expect(error).not.toBeNull();
  })

  it('should validate empty cvc code', async () => {
    render(<Checkout />)
    const cvcCardInput = screen.getByTestId('cvc')
    fireEvent.change(cvcCardInput, { target: { value: '' } })
    fireEvent.blur(cvcCardInput)
  
    let error;
    await waitFor(() => {
      error = screen.getByText(CHECKOUT_ERROR_MESSAGES.cvc.required)
    })

    expect(error).not.toBeNull();
  })

  it('should validate invalid cvc code', async () => {
    render(<Checkout />)
    const cvcCardInput = screen.getByTestId('cvc')
    fireEvent.change(cvcCardInput, { target: { value: '12' } })
    fireEvent.blur(cvcCardInput)
  
    let error;
    await waitFor(() => {
      error = screen.getByText(CHECKOUT_ERROR_MESSAGES.cvc.invalid)
    })

    expect(error).not.toBeNull();
  })

  it('should validate empty expiration date', async () => {
    render(<Checkout />)
    const expirationDateInput = screen.getByTestId('expiry')
    fireEvent.change(expirationDateInput, { target: { value: '' } })
    fireEvent.blur(expirationDateInput)
  
    let error;
    await waitFor(() => {
      error = screen.getByText(CHECKOUT_ERROR_MESSAGES.expiry.required)
    })

    expect(error).not.toBeNull();
  })

  it('should validate invalid expiration date', async () => {
    render(<Checkout />)
    const expirationDateInput = screen.getByTestId('expiry')
    fireEvent.change(expirationDateInput, { target: { value: '9999' } })
    fireEvent.blur(expirationDateInput)
  
    let error;
    await waitFor(() => {
      error = screen.getByText(CHECKOUT_ERROR_MESSAGES.expiry.invalid)
    })

    expect(error).not.toBeNull();
  })

  it('should validate empty plots number', async () => {
    render(<Checkout />)
    const plotsSelectField = screen.getByTestId('plots')
    fireEvent.change(plotsSelectField, { target: { value: '' } })
    fireEvent.blur(plotsSelectField)
  
    let error;
    await waitFor(() => {
      error = screen.getByText(CHECKOUT_ERROR_MESSAGES.plots.required)
    })

    expect(error).not.toBeNull();
  })
})