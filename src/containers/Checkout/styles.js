import styled from 'styled-components';

import { breakpoints, colors } from '@demo-shop/styles/globals';

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: ${breakpoints.lg}) {
    flex-direction: column;
  }
`

export const LeftSection = styled.div`
  max-width: 352px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${colors.red};
  padding: 3rem 1.2rem 3rem 4.2rem;

  @media (max-width: ${breakpoints.lg}) {
    max-width: 100%;
    height: 800px;
    padding: 3rem 2.8rem;
  }
`

export const RightSection = styled.div`
  height: 100%;
  max-width: 672px;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 3rem 4rem 3rem 168px; 
  background: ${colors.white};

  @media (max-width: ${breakpoints.lg}) {
    width: 100%;
    padding: 0;
    max-width: 100%;
    height: 100%;
    padding: 5rem 3rem;
  }
`

export const SmallHeader = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  color: ${colors.white};
  font-size: 15px;
  font-weight: normal;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  @media (max-width: ${breakpoints.lg}) {
    max-width: 2rem;
    
    span {
      display: none;
    }

    svg {
      margin-top: -4px;
      width: 2rem;
      height: 2rem;
    }
  }

  &:hover {
    transform: translateX(-4px);
  }

  span {
    margin-left: 8px;
  }

  > svg {
    transition: all 0.1s ease-in-out;
    margin-top: -2px;
    font-size: 18px;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.white};
  font-size: 0.72rem;
  margin-top: 54px;
  word-spacing: 2px;

  @media (max-width: ${breakpoints.lg}) {
    justify-content: center;
    margin-top: 32px;
    padding-bottom: 80px;
  }

  > img {
    width: 3.2rem;
    margin-right: 15px;
  }
`

export const StepsNav = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;

  @media (max-width: ${breakpoints.lg}) {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  @media (max-width: ${breakpoints.lg}) {
    margin-top: 4rem;
  }
`

export const FooterForm = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  @media (max-width: ${breakpoints.lg}) {
    justify-content: center;

    button {
      max-width: 100%;
    }
  }
`

export const StepsForMobile = styled.div`
  position: absolute;
  left: 50%;
  top: 4rem;
  transform: translate(-50%, -50%);
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${colors.white};
  font-weight: normal;

  span {
    font-weight: normal;
  }

  @media (max-width: ${breakpoints.lg}) {
    display: flex;
  }
`