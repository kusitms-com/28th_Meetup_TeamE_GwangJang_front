import { ButtonProps } from "@/types/index.ts";

import { KakaoBtn, TestBtn } from "./style.ts";

export const KakaoButton = ({ children, onClick }: ButtonProps) => {
  return <KakaoBtn onClick={onClick}>{children}</KakaoBtn>;
};

export const BlueButton = ({ children, onClick }: ButtonProps) => {
  return <TestBtn onClick={onClick}>{children}</TestBtn>;
};
