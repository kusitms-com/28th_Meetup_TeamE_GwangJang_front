import { InputProps } from "@/types";

import { BasicInput } from "./style";

export const Input: React.FC<InputProps> = ({ value, type, placeholder, onChange }) => {
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
