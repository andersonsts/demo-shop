import valid from 'card-validator'
import * as yup from 'yup'

import { CHECKOUT_ERROR_MESSAGES } from '@demo-shop/contants/errorMessages/checkoutForm'

export const formikContent = {
  initialValues: {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
    plots: '',
  },
  validationSchema: yup.object().shape({
    cvc: yup.string()
      .required(CHECKOUT_ERROR_MESSAGES.cvc.required)
      .test(
        'test-cvc',
        CHECKOUT_ERROR_MESSAGES.cvc.invalid,
        value => valid.cvv(value).isValid
      ),
    expiry: yup.string()
      .required(CHECKOUT_ERROR_MESSAGES.expiry.required)
      .test(
        'test-expiry',
        CHECKOUT_ERROR_MESSAGES.expiry.invalid,
        value => valid.expirationDate(value).isValid
      ),
    name: yup.string()
      .test(
        'test-fullname',
        CHECKOUT_ERROR_MESSAGES.name.required,
        value => value && value.match(/(\w.+\s).+/i)
      ),
    number: yup.string()
      .required(CHECKOUT_ERROR_MESSAGES.number.required)
      .test(
        'test-number',
        CHECKOUT_ERROR_MESSAGES.number.invalid,
        value => valid.number(value).isValid
      ),
    plots: yup.string()
        .required(CHECKOUT_ERROR_MESSAGES.plots.required)
  }),
  onSubmit: (values) => {
  }
}