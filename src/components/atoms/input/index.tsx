import { InputProps } from "@/types";

import { BasicInput } from "./style";

export const Input = ({ value, type, placeholder, onChange }: InputProps) => {
  return (
    <div>
      <BasicInput
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
