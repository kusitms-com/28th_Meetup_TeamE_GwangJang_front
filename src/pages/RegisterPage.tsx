import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import logo from "@/assets/LoginLogo.svg";
import { BlueButton } from "@/components/atoms/button";
import KakaoLogin from "@/components/molecules/login/KakaoLogin";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <RegisterTitle>
        <p
          className="title"
          onClick={() => navigate("/")}
        >
          세상과 더 가까워져요
        </p>
        <div className="titleImg">
          <img
            src={logo}
            alt="광장"
            width={70}
            onClick={() => navigate("/")}
          />
        </div>
      </RegisterTitle>
      <LoginBox>
        <BlueButton onClick={() => navigate("/localRegister")}>이메일로 회원가입하기</BlueButton>
        <OrLine>
          <div></div>
          <p>또는</p>
          <div></div>
        </OrLine>
        <KakaoLogin page="register" />
      </LoginBox>
      <EtcBox>
        <div className="notUser">
          <p>이미 회원이신가요?</p>
          <p
            className="sign-up"
            onClick={() => navigate("/login")}
          >
            로그인
          </p>
        </div>
      </EtcBox>
    </Container>
  );
};

export default RegisterPage;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  padding-bottom: 83px;
`;
const RegisterTitle = styled.div`
  .title {
    color: var(--Gray10_900, #212121);
    font-size: var(--text_h4);
    font-weight: 700;
    line-height: 42px;
    cursor: pointer;
  }
  .titleImg {
    justify-content: center;
    display: flex;
    margin-top: 9px;
    img {
      cursor: pointer;
    }
  }
  margin-bottom: 80px;
`;
const OrLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
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
