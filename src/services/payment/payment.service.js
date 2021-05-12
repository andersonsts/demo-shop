import { api } from '@demo-shop/services/api'

import { PAYMENT_ROUTES } from "./routes"

export const payment = async (body) => {
  try {
    const { data } = await api.post(PAYMENT_ROUTES.payment, { ...body }) 
    return data;
  } catch (err) {
    console.log('@erro in payment method', err)
  }
}