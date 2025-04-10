import { useState } from "react";
import 'react-international-phone/style.css';
import { PhoneInput } from 'react-international-phone';

const Input = ({
  label,
  required = false,
  placeholder,
  type = "text",
  prefix,
  options,
  value,
  onChange,
  validate,
  errorMessage,
  phone = false,
}) => {
  const [isTouched, setIsTouched] = useState(false);

  const isValid = !validate || validate(value);

  const handleChange = (val, countryData = null) => {
    if (onChange && typeof onChange === "function") {
      // Return raw value or structured phone data
      phone
        ? onChange({
            number: val,
            countryCode: countryData?.countryCode,
            dialCode: countryData?.dialCode,
            fullCountry: countryData,
          })
        : onChange(val);
    }
    if (!isTouched) setIsTouched(true);
  };

  const renderInputField = () => {
    if (phone) {
      return (
        <PhoneInput
          country={"np"}
          value={value || ""} 
          onChange={handleChange}
          inputProps={{
            required,
            name: "phone",
            autoFocus: false,
            className:
              "w-full bg-transparent outline-none text-base text-gray-700",
          }}
          containerClass="!w-full"
          inputClass="!w-full !bg-transparent !outline-none !border-none text-base text-gray-700"
          buttonClass="!bg-transparent"
          dropdownClass="!z-50"
        />
      );
    }

    if (type === "select" && options) {
      return (
        <select
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          className="w-full bg-transparent outline-none text-base text-gray-700"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    return (
      <div className="flex items-center gap-4 w-full">
        {prefix && (
          <span className="text-gray-400 text-base font-medium">
            {prefix}
          </span>
        )}
        <input
          type={type}
          value={value || ""} // Ensure the value is always a string
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-base text-gray-700"
        />
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-stone-800">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}

      <div
        className={`p-3 bg-neutral-50 rounded border transition-all duration-200 ${
          isTouched && !isValid ? "border-red-500" : "border-slate-300"
        }`}
      >
        {renderInputField()}
      </div>

      {isTouched && !isValid && (
        <span className="text-red-500 text-sm mt-1">{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
