const apiErrorHandler = (error) => {
  if (error.response?.data?.message) {
    const errors = error.response.data.message
    const errorMap = {}
    errors.forEach(({ field, message }) => {
      errorMap[field] = message
    })
    return errorMap
  } else if (error.response?.data) {
    return error.response?.data?.message ?? 'something wrong!'
  }

  return error
}

export default apiErrorHandler
