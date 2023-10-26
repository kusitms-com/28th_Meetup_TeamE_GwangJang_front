import styled from "styled-components";

import { ButtonProps } from ".";

export const KakaoBtn = styled.button<ButtonProps>`
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
  font-size: 1rem;
  font-weight: 600;
`;

export const TestBtn = styled.button<ButtonProps>`
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

  //
  color: #fff;
  text-align: center;

  /* Button1_Sb */
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 100% */
`;
