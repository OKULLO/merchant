import * as yup from 'yup'

export default yup.object().shape({
  amount:yup.number()
  .integer()
  .positive()
  .required('amount is required.'),
  // currency:yup.string().required('currency is required.'),

  });




