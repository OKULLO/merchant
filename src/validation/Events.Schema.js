import * as yup from 'yup'

export default yup.object().shape({

  name: yup.string().required('Please add  title').defined(),
  // event_time: yup.string().required('Event time is required').defined(),
  detail_description: yup
  .string()
  .min(100)
  .max(3000)
  .trim()
  .required('Description  is required'),
  description: yup
  .string()
  .min(10)
  .max(500)
  .trim()
  .required('Description  is required'),
  country: yup.string()
  .required('Please select Country'),
  city: yup.string()
  .required('Please select Region'),
  event_link: yup.string()
  .required('Please add an event link'),
  price: yup.number().integer().required('Price  is required'),
  number_of_openings: yup.number().integer().required('Number of entries is required'),
 
})