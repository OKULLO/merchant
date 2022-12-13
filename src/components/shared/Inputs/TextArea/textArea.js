import React from 'react'


export default function TextArea({ label, ...props }) {
  const { fieldClass,width, labelClass, inputClass, name,HandleChange, error,type,placeholder,rows } = props
  

  return (
    <div className={fieldClass}>
      <span className='text-discord-red text-xs'>{error}</span>
      <label className={labelClass} htmlFor={name}>
        {/* {label} */}
      </label>
      <textarea className={inputClass}  name={name} onChange={HandleChange} type={type} placeholder={placeholder} cols='50' rows={rows} />
    </div>
  )
}
