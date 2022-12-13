import { Client } from "../client"

export const getProfile = (id) => {
  return Client.get('/api/v1/users/me' + id)
}


