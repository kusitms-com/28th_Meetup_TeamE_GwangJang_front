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
  font-size: var(--text_b1);
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
  margin-top: 40px;
`;

export const CateButton = styled.button<CategoryButtonProps>`
  cursor: pointer;
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  text-align: center;

  font-family: Pretendard; //왜 적용이 안되지???

  font-size: var(--text_b2);
  line-height: 24px;
  letter-spacing: -0.24px;

  background-color: ${({ isSelected }) => (isSelected ? "var(--Main_Blue)" : "#FFF")};
  color: ${({ isSelected }) => (isSelected ? "#FFF" : "var(--Gray9_800)")};
  border: ${({ isSelected }) =>
    isSelected ? "1px solid var(--Main_Blue)" : "1px solid var(--Gray5_400)"};
`;

export const PrevArrow = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  z-index: 1;
`;

export const NextArrow = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  z-index: 1;
`;

export const BorderStyleButton = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: row;
  padding: 7px;
  border-radius: 4px;
  border: 1px solid var(--Gray3_200, #eee);
  line-height: 18px;
  letter-spacing: -0.18px;
  cursor: pointer;

  div {
    color: var(--Gray7_600, #757575);
    font-size: var(--text_cap1);
  }

  p {
    color: var(--Gray10_900);
    font-size: var(--text_cap1);
  }
`;
