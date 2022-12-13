import * as yup from 'yup'

export default yup.object().shape({
  account_number: yup.number("Must be a number type")
  .integer("Account Number must be an Integer Value")
  .positive("Account Number Must be a positive value")
  .min(10, "Hey! The account number cannot be less 10 digits")
  .required('Account Number cannot be empty.'),

  amount:yup.number()
  .integer()
  .positive()
  .required('amount is required.'),
  reason: yup
  .string()
  .min(10)
  .max(50)
  .trim()
  .required('Reason  is required'),
})