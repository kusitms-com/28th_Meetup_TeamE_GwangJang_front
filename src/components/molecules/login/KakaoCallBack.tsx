import { useEffect } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import styled from "styled-components";

export const KakaoCallBack = () => {
  const navigate = useNavigate();

  //인가코드
  const CODE = new URL(window.location.href).searchParams.get("code");
  console.log("인가코드:", CODE);

  useEffect(() => {
    const getToken = async () => {
      console.log("getToken 호출");

      try {
        const res = await axios.post(
          "https://api.gwang-jang.co.kr/member/auth/signIn/kakao",
          {
            token: CODE,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("res:", res);
        console.log("res.data:", res.data);

        navigate("/");
      } catch (err) {
        console.error("error:", err);
      }
    };
    getToken();
  }, []);

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
