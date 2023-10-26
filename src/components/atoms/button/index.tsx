import React from "react";

import { KakaoBtn, TestBtn } from "./style.ts";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  // 다른 버튼 관련 프로퍼티 추가
}

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
