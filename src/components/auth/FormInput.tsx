// FormInput.tsx
import { useState } from "react";
import type { FormInputProps } from "../../interface/types";
import { EyeOff, EyeOn } from "../../assets/svg/svg";

const FormInput = ({
  label,
  className,
  placeholder,
  required = false,
  type = "text",
  icon,
}: FormInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const inputType =
    type === "password" ? (isPasswordVisible ? "text" : "password") : type;

  return (
    <div>
      <label htmlFor={label} className="text-xs font-medium text-dark">
        {label}
      </label>
      <div className="flex border-[#D0D5DD] border rounded-lg px-3.5 h-10 gap-2 items-center mt-2">
        {icon}

        <input
          type={inputType}
          className={
            "placeholder:text-[#808080] w-full outline-none " +
            (className ? className : "")
          }
          required={required}
          placeholder={placeholder}
          id={label}
        />

        {type === "password" && (
          <button
            type="button"
            className="cursor-pointer"
            aria-label="Toggle password visibility"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? <EyeOn /> : <EyeOff />}
          </button>
        )}
      </div>
    </div>
  );
};

export default FormInput;
