import { Formik } from 'formik'

const FormWrapper = ({initialValues,validationSchema,onSubmit, SomeChild}) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    <SomeChild />
  </Formik>
)

export default FormWrapper