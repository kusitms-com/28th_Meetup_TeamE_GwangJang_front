import { useEffect } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import styled from "styled-components";

export const KakaoCallBack = () => {
  //인가코드
  const navigate = useNavigate();
  useEffect(() => {
    const Code = new URL(window.location.href).searchParams.get("code");
    console.log("인가코드:", Code);
    axios
      .post(
        "https://api.gwang-jang.co.kr/member/auth/signIn/kakao",
        { token: Code },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res); // res -> "registrationStatus": true navigate / 라우팅 false 이면  navigate /addInfomation
        navigate("/");
      })
      .catch((err) => {
        console.error("error:", err);
      });
  }, [navigate]);

  return (
    <LoadingBox>
      <h3>잠시만 기다려주세요.</h3>
      <SyncLoader />
    </LoadingBox>
  );
};

const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.3rem;
`;
