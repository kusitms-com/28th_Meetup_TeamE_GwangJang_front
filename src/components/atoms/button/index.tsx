import { ButtonProps } from "@/types/index.ts";

import { KakaoBtn, TestBtn } from "./style.ts";

export const KakaoButton: React.FC<ButtonProps> = ({ children, onClick, ...otherProps }) => {
  return (
    <KakaoBtn
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </KakaoBtn>
  );
};

export const BlueButton: React.FC<ButtonProps> = ({ children, onClick, ...otherProps }) => {
  return (
    <TestBtn
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </TestBtn>
  );
};
