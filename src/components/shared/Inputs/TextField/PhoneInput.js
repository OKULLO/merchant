import PhoneInput from "react-phone-input-2";
import { useField } from "formik";


const PhoneInputField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  return (
    
      <PhoneInput
        {...props}
        {...field}
        value={field.value}
        defaultCountry="NO"
        onChange={(value) => {
          helpers.setValue(value);
        }}
      />
  
  );
};

export default PhoneInputField;