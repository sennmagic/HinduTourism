const Input = ({ 
  label, 
  required, 
  placeholder, 
  type = "text", 
  prefix, 
  options, 
  value, 
  onChange, 
  isValid = true 
}) => (
  <div className="w-full flex-col justify-start items-start gap-2 inline-flex overflow-hidden">
    <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
      <span className="text-stone-800 text-sm font-normal font-['Inter'] leading-[21px]">
        {label}
        {required && <span className="text-rose-600"> *</span>}
      </span>
    </div>
    <div className={`self-stretch h-12 p-3 bg-neutral-50 rounded border ${isValid ? "border-slate-300" : "border-red-500"} flex-col justify-start items-start gap-2.5 flex`}>
      {type === "select" && options ? (
        <select
          value={value}
          onChange={onChange}
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
            onChange={onChange}
            placeholder={placeholder}
            className="text-gray-400 text-base font-normal font-['Inter'] leading-normal bg-transparent outline-none w-full"
          />
        </div>
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="text-gray-400 text-base font-normal font-['Inter'] leading-normal bg-transparent outline-none w-full"
        />
      )}
    </div>
  </div>
);

export default Input;
