import valid from 'card-validator'
import * as yup from 'yup'

export const formikContent = {
  validateOnChange: true,
  validateOnBlur: false,
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
      .required('Informe o código de segurança')
      .test(
        'test-cvc',
        'Código inválido',
        value => valid.cvv(value).isValid
      ),
    expiry: yup.string()
      .required('Informe a data de expiração')
      .test(
        'test-expiry',
        'Data inválida',
        value => valid.expirationDate(value).isValid
      ),
    name: yup.string()
      .test(
        'test-fullname',
        'Informe seu nome completo',
        value => value && value.match(/(\w.+\s).+/i)
      ),
    number: yup.string()
      .required('Informe um número de cartão')
      .test(
        'test-number',
        'Número de cartão inválido',
        value => valid.number(value).isValid
      ),
    plots: yup.string()
        .required('Insira o número de parcelas')
  }),
  onSubmit: () => {}
}