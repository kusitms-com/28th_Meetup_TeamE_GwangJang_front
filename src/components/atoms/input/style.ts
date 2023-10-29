import styled from "styled-components";

import { InputProps } from ".";

export const BasicInput = styled.input<InputProps>`
  box-sizing: border-box;
  width: 370px;
  height: 56px;
  border-radius: 5px;
  border: 1px solid var(--Gray4_300, #d9d9d9);
  outline: none;
  &:focus {
    border: 1px solid var(--Main_Blue, #0084ff);
  }
  //
  color: var(--Gray10_900, #212121);
  padding-left: 20px;
  padding-right: 80px;
  font-size: 1rem;
  font-weight: 500;

  &::placeholder {
    color: var(--Gray7_600, #757575);

    /* B2_M */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    letter-spacing: -0.24px;
  }
`;
