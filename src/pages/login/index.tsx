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
      </LoginBox>{" "}
      <EtcBox>
        <div className="findProp">
          <p>아이디 찾기</p>
          <p>|</p>
          <p>비밀번호 찾기</p>
        </div>
        <div className="notUser">
          <p>아직 회원이 아니신가요?</p>
          <p className="sign-up">회원가입</p>
        </div>
      </EtcBox>
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

const EtcBox = styled.div`
  display: flex;
  flex-direction: column;

  .findProp {
    display: flex;
    gap: 10px;
    color: var(--Gray7_600);
    text-align: center;

    /* TextButton1_M */
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .notUser {
    display: flex;
    color: var(--Gray5_400, #bdbdbd);
    text-align: center;

    /* TextButton1_M */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    gap: 14px;

    .sign-up {
      color: var(--Main_Blue);
      /* TextButton2_Sb */
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-decoration-line: underline;
    }
  }
`;
