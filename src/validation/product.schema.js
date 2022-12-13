import * as yup from 'yup'

export default yup.object().shape({

  product_name: yup.string().min(3).max(50).trim().required('Product name is required').defined(),
  description: yup
  .string()
  .min(10)
  .max(150)
  .trim()
  .required('Description  is required'),
  instock: yup.number().integer().required('Quantity  is required'),
  price: yup.number().integer().required('Price  is required'),
  destination: yup.string().required('Destination  is required')
 
})