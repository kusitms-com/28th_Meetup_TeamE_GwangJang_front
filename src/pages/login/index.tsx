import styled from "styled-components";

import logo from "@/assets/logo.svg";

import KakaoLogin from "./KakaoLogin";
import { LocalLogin } from "./LocalLogin";

export const LoginPage = () => {
  return (
    <LoginContainer>
      <LoginTitle>
        <img
          src={logo}
          alt="광장"
        />
        <p>로그인</p>
      </LoginTitle>
      <LoginBox>
        <LocalLogin />
        <OrLine>
          <div></div>
          <p>또는</p>
          <div></div>
        </OrLine>
        <KakaoLogin />
      </LoginBox>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 14px;
  margin-bottom: 28px;
  p {
    color: var(--Gray10_900, #212121);
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const OrLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8.9px;
  div {
    /* width: 50%; */
    width: 165px;
    height: 1px;
    background: #d9d9d9;
  }

  p {
    color: var(--Gray5_400, #bdbdbd);
    text-align: center;

    /* Cap1_M */
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 150% */
    letter-spacing: -0.18px;
  }
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
