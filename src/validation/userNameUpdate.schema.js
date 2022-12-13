import * as yup from 'yup'

export default yup.object().shape({
  
  exploreid: yup.string().min(3).max(20).trim().required('Username is required'),
  email: yup
  .string()
  .email('Not a well formed email address')
  .lowercase()
  .required('Email is required')
  .defined(),
  channel: yup.string().min(3).max(20).trim().required('Channel name is required')
})

