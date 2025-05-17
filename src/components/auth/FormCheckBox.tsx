import { Check } from "../../assets/svg/svg";
import type { FormInputProps } from "../../interface/types";

const FormCheckBox = ({
  label,
  required = false,
}: Omit<FormInputProps, "type" | "icon" | "className" | "placeholder">) => {
  return (
    <div className="relative flex gap-2">
      <div className="relative size-5">
        <input
          type="checkbox"
          id={label}
          required={required}
          className=" border-[#D0D5DD] border rounded appearance-none size-5 peer checked:border-0 checked:bg-[#014DAF] "
        />
        <div className="absolute inset-0 items-center justify-center hidden pointer-events-none peer-checked:flex">
          <Check />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor={label} className="text-sm text-[#161616]">
          {label}
        </label>
      </div>
    </div>
  );
};

export default FormCheckBox;
