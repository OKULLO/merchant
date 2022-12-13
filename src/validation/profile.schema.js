import * as yup from 'yup'

export default yup.object().shape({

  bio: yup.string()
  .min(50, 'Bio is too Short! Must be above 50 chars')
  .max(500, 'Biography is too Long! Must be less 500 chars')
  .required('Bio is Required'),
  country: yup.string()
  .required('Please select Country'),
  city: yup.string()
  .required('Please select Region'),
  avatar_url: yup.string()
  .required('Please upload profile image'),

})
