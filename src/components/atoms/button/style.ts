import styled from "styled-components";

import { ButtonProps, CategoryButtonProps } from "@/types/index.ts";

export const KakaoBtn = styled.button<ButtonProps>`
  cursor: pointer;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 370px;
  height: 56px;
  border-radius: 5px;
  background: #ffe812;
  gap: 4px;
  border: none;
  font-size: var(--text_b2);
  font-weight: 600;
`;

export const TestBtn = styled.button<ButtonProps>`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 370px;
  height: 56px;
  border-radius: 5px;
  border: none;

  //
  background: var(--Main_Blue, #0084ff);
  color: #fff;
  text-align: center;
  font-size: var(--text_b1);
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 100% */
`;

export const CateButton = styled.button<CategoryButtonProps>`
  cursor: pointer;
  display: flex;
  padding: 8px 16px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;

  border: none;
  /* color: ${(props) => props.color};
  background: ${(props) => props.background};
  border: ${(props) => props.border}; */

  color: var(--White, #fff);
  text-align: center;
  font-family: Pretendard; //왜 적용이 안되지???
  font-size: var(--text_b2);
  line-height: 24px;
  letter-spacing: -0.24px;

  //
  ${(props) =>
    props.color === "var(--White, #fff)" &&
    `
      color: ${props.isCorrect ? "#FFF" : "var(--Gray9_800)"};
      background: ${props.isCorrect ? "var(--Main_Blue)" : "#FFF"};
      border: ${props.isCorrect ? "1px solid var(--Main_Blue)" : "1px solid var(--Gray5_400)"};
    `}
`;
