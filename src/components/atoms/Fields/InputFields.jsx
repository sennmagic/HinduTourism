import { useState } from "react";

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
  errorMessage 
}) => {
  const [isTouched, setIsTouched] = useState(false);
  const isValid = !validate || validate(value);

  const handleChange = (e) => {
    if (onChange && typeof onChange === "function") {
      onChange(e); // Safely call the onChange function passed as a prop
    }
    if (!isTouched) setIsTouched(true);
  };

  return (
    <div className="w-full flex-col justify-start items-start gap-2 inline-flex overflow-hidden">
      <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
        <span className="text-stone-800 text-sm font-normal font-['Inter'] leading-[21px]">
          {label}
          {required && <span className="text-rose-600"> *</span>}
        </span>
      </div>
      <div className={`self-stretch h-12 p-3 bg-neutral-50 rounded border ${isTouched && !isValid ? "border-red-500" : "border-slate-300"} flex-col justify-start items-start gap-2.5 flex`}>
        {type === "select" && options ? (
          <select
            value={value}
            onChange={handleChange}
            className="text-gray-400 text-base font-normal font-['Inter'] leading-normal bg-transparent outline-none w-full"
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
        ) : prefix ? (
          <div className="flex items-center gap-4 w-full">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-base font-medium font-['Inter'] leading-normal">
                {prefix}
              </span>
            </div>
            <input
              type={type}
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
              className="text-gray-400 text-base font-normal font-['Inter'] leading-normal bg-transparent outline-none w-full"
            />
          </div>
        ) : (
          <input
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className="text-gray-400 text-base font-normal font-['Inter'] leading-normal bg-transparent outline-none w-full"
          />
        )}
      </div>
      {isTouched && !isValid && (
        <span className="text-red-500 text-sm mt-1">{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
