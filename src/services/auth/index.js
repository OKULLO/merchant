import { Api,Client } from '../client'

// export const register = (data) => {
//   return Api.post('/api/v1/users',Client, data)
// }
export const login = async (data) => {
  return Api.post('/api/v1/user-service/auth/login',Client, data)
}

export const sendOTP = async (data) => {
  return Api.post('/api/v1/user-service/auth/Otp/send',Client, data)
}

export const validateOTP = (token) => {
  return Api.get('/api/v1/user-service/auth/login/validate-phonenumber',Client)
}

export const logout = (refreshToken) => {
  return Api.post('/api/v1/user-service/auth/logout', { refreshToken })
}
