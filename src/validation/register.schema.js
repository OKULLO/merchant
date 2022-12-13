import * as yup from 'yup'

export default yup.object().shape({
  phone_number: yup.number()
  .integer().min(10).required('Phone number is required'),

  email: yup
    .string()
    .email('Not a well formed email address')
    .lowercase()
    .required('Email is required')
    .defined(),

  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(100)
    .required('Password is required')
    .defined(),
  first_name: yup.string()
    .min(2, 'First name is is too Short!')
    .max(50, 'First name is too Long!')
    .required('First name is Required'),
  last_name: yup.string()
    .min(2, 'last name is too Short!')
    .max(50, 'Too Long!')
    .required('Last name is Required'),
  username: yup.string()
  .min(2, 'Username is too Short!')
  .max(10, 'Username is too Long!')
  .required('Username is Required'),


})
