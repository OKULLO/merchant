import React from 'react'
import { useField } from 'formik'

export default function TextArea({ label, ...props }) {
  const { fieldClass,width, labelClass, inputClass, name, type,placeholder,rows } = props
  const [field, { error, touched }] = useField(props)

  return (
    <div className={fieldClass}>
      {error != null && touched && (
        <span className='text-discord-red text-xs'>{error}</span>
      )}
      <label className={labelClass} htmlFor={name}>
        {/* {label} */}
      </label>
      <textarea className={inputClass} {...field} name={name} type={type} placeholder={placeholder} cols='50' rows={rows} />
    </div>
  )
}
