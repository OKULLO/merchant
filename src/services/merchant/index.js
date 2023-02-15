import { Client } from "../client"

export const getMerchantProfile = (id) => {
  return Client.get('/api/v1/merchants/' + id)
}

export const updateMerchantProfile = (merchantId,data) => {
  return Client.put(`/api/v1/merchants/${merchantId}/update`,data)
}

