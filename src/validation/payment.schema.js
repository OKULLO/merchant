import * as yup from 'yup'

export default yup.object().shape({
  email: yup
    .string()
    .email('Not a well formed email address')
    .lowercase()
    .required('Email is required')
    .defined(),
    phonenumber: yup
    .string()
    .min(4, 'Password must be at least 6 characters')
    .max(10)
    .required('Phone number is required')
    .defined(),
})
