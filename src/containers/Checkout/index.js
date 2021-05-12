import React from 'react';
import { FaChevronLeft } from 'react-icons/fa'
import Cards from 'react-credit-cards';
import { useFormik } from 'formik';

import Input from '@demo-shop/components/Input'
import Step from '@demo-shop/components/Step'
import Button from '@demo-shop/components/Button'
import MaskedInput from '@demo-shop/components/Input/MaskedInput';
import Select from '@demo-shop/components/Select';
import Wrapper from '@demo-shop/components/Wrapper';
import Alert from '@demo-shop/components/Alert'

import { showAlertContainer } from '@demo-shop/utils/showAlertContainer'
import { PLOT_OPTIONS } from '@demo-shop/utils/options'

import { formikContent } from './formikContent'

import { 
  Container, 
  LeftSection, 
  RightSection, 
  SmallHeader, 
  Title,
  StepsNav,
  Form,
  FooterForm,
  StepsForMobile
} from './styles'

const Checkout = () => {
  const STEPS_DATA = [
    { id: 1, description: 'Carrinho' },
    { id: 2, description: 'Pagamento' },
    { id: 3, description: 'Confirmação' },
  ]
  const INITIAL_STEP = STEPS_DATA[0].id
  
  const [checkedStep, setCheckedStep] = React.useState(INITIAL_STEP)

  const formik = useFormik(formikContent)
  const { loading, startFakeSuccessProcess, showAlert } = showAlertContainer(formik.resetForm)
  const { errors, touched, values, handleChange, handleBlur } = formik
  const { cvc, expiry, name, number, focus, plots } = values

  const handleInputFocus = (event) => {
    formik.setFieldValue('focus', event.target.name)
  }
  
  const handleSubmit = () => startFakeSuccessProcess()

  return (
    <>
      <Alert 
        message='Dados cadastrados com sucesso!'
        type='success'
        show={showAlert}
      />
      <Container>
        <LeftSection>
          <SmallHeader>
            <FaChevronLeft />
            <span>Alterar forma de pagamento</span>
          </SmallHeader>

          <StepsForMobile>
            <p>
              <strong>Etapa 2 </strong> <span>de 3</span>  
            </p>
          </StepsForMobile>

          <Title>
            <img src="/images/card.svg" alt="Card icon" />
            <h1>
              Adicione um novo <br/> cartão de crédito
            </h1>
          </Title>

          <Cards 
            cvc={cvc}
            expiry={expiry}
            focused={focus}
            name={name}
            number={number}
            placeholders={{
              name: 'NOME DO TITULAR'
            }}
            locale={{
              valid: ''
            }}
          />
        </LeftSection>

        <RightSection>
          <StepsNav>
            {STEPS_DATA.map(step => (
              <Step 
                key={step.id} 
                stepName={step.description} 
                stepNumber={step.id} 
                dontArrow={step.id === STEPS_DATA.length} 
                checked={checkedStep === step.id} 
                onClickStep={() => setCheckedStep(step.id)}
              />
            ))}
          </StepsNav>

          <Form>  
            <Wrapper>
              <MaskedInput 
                name='number'
                value={number}
                label='Número do cartão'
                mask='9999 9999 9999 9999'
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleInputFocus}  
                error={(errors.number && touched.number) ? errors.number : null}
                disabled={loading}
              />
            </Wrapper>
            <Wrapper>
              <Input 
                value={name}
                name='name' 
                label='Nome (igual ao cartão)' 
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleInputFocus}
                error={(errors?.name && touched?.name) ? errors?.name : null}
                disabled={loading}
              />
            </Wrapper>
            <Wrapper cell={2}>
              <MaskedInput 
                value={expiry}
                name='expiry' 
                label='Validade'
                mask='99/99' 
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleInputFocus}  
                error={(errors?.expiry && touched?.expiry) ? errors?.expiry : null}
                disabled={loading}
              />
              <MaskedInput 
                value={cvc}
                name='cvc' 
                label='CVV'
                infoMessage='Código de segurança'
                mask='999'
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleInputFocus}
                error={(errors?.cvc && touched?.cvc) ? errors?.cvc : null}
                disabled={loading}
              />
            </Wrapper>
            <Wrapper>
              <Select 
                value={plots}
                name='plots'
                label='Número de parcelas'
                options={PLOT_OPTIONS}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleInputFocus}
                error={(errors?.plots && touched?.plots) ? errors?.plots : null}
                disabled={loading}
              />
            </Wrapper>
            <FooterForm>
              <Button 
                type='button'
                disabled={!formik.isValid}
                loading={loading}
                onClick={handleSubmit}
              >
                Continuar
              </Button>
            </FooterForm>
          </Form>
        </RightSection>
      </Container>
    </>
  )
}

export default Checkout