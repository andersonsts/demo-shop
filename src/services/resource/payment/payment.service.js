import { api } from "../../api"

import { PAYMENT_ROUTES } from "./routes"

// TODO
export const payment = async (body) => {
  try {
    const { data } = await api.post(PAYMENT_ROUTES.payment, { ...body }) 
    return data;
  } catch (err) {
    console.log('@erro in payment method', err)
  }
}