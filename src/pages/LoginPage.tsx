import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import logo from "@/assets/LoginLogo.svg";
import KakaoLogin from "@/components/molecules/login/KakaoLogin";
import { LocalLogin } from "@/components/molecules/login/LocalLogin";

export const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <LoginContainer>
      <LoginTitle>
        <img
          src={logo}
          alt="광장"
          onClick={() => navigate("/")}
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
        <KakaoLogin page="login" />
      </LoginBox>
      <EtcBox>
        <div className="findProp">
          <p className="notActive">아이디 찾기</p>
          <p>|</p>
          <p className="notActive">비밀번호 찾기</p>
        </div>
        <div className="notUser">
          <p>아직 회원이 아니신가요?</p>
          <p
            className="sign-up"
            onClick={() => navigate("/register")}
          >
            회원가입
          </p>
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
  margin-top: 136px;
  img {
    cursor: pointer;
  }
`;

const LoginTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 28px;
  gap: 14px;
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
  margin: 14px 0 5px;
  div {
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
    line-height: 18px; /* 150% */
    letter-spacing: -0.18px;
  }
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const EtcBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 24px;
  gap: 42px;
  .findProp {
    display: flex;
    gap: 10px;
    color: var(--Gray7_600);
    text-align: center;
  }
  .notActive {
    cursor: pointer;
  }

  .notUser {
    display: flex;
    color: var(--Gray5_400, #bdbdbd);
    text-align: center;

    /* TextButton1_M */
    font-family: Pretendard;
    font-size: 1rem;
    gap: 14px;

    .sign-up {
      color: var(--Main_Blue);
      font-size: 1rem;
      cursor: pointer;
      text-decoration-line: underline;
    }
  }
`;
