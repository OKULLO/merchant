import * as yup from 'yup'

export default yup.object().shape({
  username: yup
    .string()
    .lowercase()
    .required('Username is required')
    .defined(),
  password: yup
    .string()
    .min(4, 'Password must be at least 6 characters')
    .max(100)
    .required('Password is required')
    .defined(),
})
