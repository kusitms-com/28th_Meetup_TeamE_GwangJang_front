import React from "react";

import "./Button.styles.ts";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  // 다른 버튼 관련 프로퍼티 추가
}

const Button: React.FC<ButtonProps> = ({ children, onClick, ...otherProps }) => {
  return (
    <button
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
