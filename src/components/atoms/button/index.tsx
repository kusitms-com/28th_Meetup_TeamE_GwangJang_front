import { ButtonProps, CategoryButtonProps } from "@/types/index.ts";

import { CateButton, KakaoBtn, TestBtn } from "./style.ts";

export const KakaoButton = ({ children, onClick }: ButtonProps) => {
  return <KakaoBtn onClick={onClick}>{children}</KakaoBtn>;
};

export const BlueButton = ({ children, onClick }: ButtonProps) => {
  return <TestBtn onClick={onClick}>{children}</TestBtn>;
};

export const CategoryButton = ({ children, isCorrect, onClick }: CategoryButtonProps) => {
  return (
    <CateButton
      onClick={onClick}
      isCorrect={isCorrect}
    >
      {children}
    </CateButton>
  );
};
