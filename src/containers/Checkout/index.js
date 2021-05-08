import React from 'react';
import { FaChevronLeft } from 'react-icons/fa'
import Cards from 'react-credit-cards';
import { useFormik } from 'formik';

import Input from '../../components/Input';
import Step from '../../components/Step'
import Button from '../../components/Button'
import MaskedInput from '../../components/Input/MaskedInput';
import Select from '../../components/Select';
import Wrapper from '../../components/Wrapper';
import Alert from '../../components/Alert'

import { showAlertContainer } from '../../utils/showAlertContainer'
import { PLOT_OPTIONS } from '../../utils/options'

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
  const { loading, start, showAlert } = showAlertContainer(formik.resetForm)
  const { errors, values, handleChange } = formik
  const { cvc, expiry, name, number, focus, plots } = values

  const handleInputFocus = (event) => {
    formik.setFieldValue('focus', event.target.name)
  }
  
  const handleSubmit = () => start()

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
                onFocus={handleInputFocus}  
                error={errors?.number}
              />
            </Wrapper>
            <Wrapper>
              <Input 
                value={name}
                name='name' 
                label='Nome (igual ao cartão)' 
                onChange={handleChange}
                onFocus={handleInputFocus}
                error={errors?.name}
              />
            </Wrapper>
            <Wrapper cell={2}>
              <MaskedInput 
                value={expiry}
                name='expiry' 
                label='Validade'
                mask='99/99' 
                onChange={handleChange}
                onFocus={handleInputFocus}  
                error={errors?.expiry}
              />
              <MaskedInput 
                value={cvc}
                name='cvc' 
                label='CVV'
                infoMessage='Código de segurança'
                mask='999' 
                hasInfo
                onChange={handleChange}
                onFocus={handleInputFocus}
                error={errors?.cvc}
              />
            </Wrapper>
            <Wrapper>
              <Select 
                value={plots}
                name='plots'
                label='Número de parcelas'
                options={PLOT_OPTIONS}
                onChange={handleChange}
                onFocus={handleInputFocus}
                error={errors?.plots}
              />
            </Wrapper>
            <FooterForm>
              <Button 
                onClick={handleSubmit}
                disabled={!formik.isValid}
                loading={loading}
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