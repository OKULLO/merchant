import * as yup from 'yup'

export default yup.object().shape({

  business_type: yup.string().required('Please select business category').defined(),
  open_hours: yup.string().required('Open hours is required').defined(),
  description: yup
  .string()
  .min(500)
  .max(3000)
  .trim()
  .required('Description  is required'),
  country: yup.string()
  .required('Please select Country'),
  city: yup.string()
  .required('Please select Region'),
  company_name:yup.string().required('Business name is required')
 
})