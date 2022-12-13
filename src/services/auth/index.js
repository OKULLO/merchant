import { Api,Client } from '../client'

export const register = (data) => {
  return Api.post('/api/v1/users',Client, data)
}
export const login = async (data) => {
  return Api.post('/api/v1/users/login',Client, data)
}

export const confirmAccount = (token) => {
  return Api.get('/api/auth/confirm/'+token,Client)
}

export const verifyEmail = (data) => {
  return Api.post('/api/auth/send_email_token',Client, data)
}
export const resetPassword = (data) => {
  return Api.put('/api/auth/updatepassword',Client, data)
}

export const resetTokenVerification = (token) => {
  return Api.get('/api/auth/reset/'+token,Client)
}
export const forgotPasswrd = (data) => {
  return Api.post('/api/v1/auth/forgotpassword',Client, data)
}

export const logout = (refreshToken) => {
  return Api.post('/api/v1/auth/logout', { refreshToken })
}
