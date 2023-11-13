import { ChangeEvent, KeyboardEvent, useState } from "react";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { postLocalLogin } from "@/apis";
import { BlueButton } from "@/components/atoms/button";
import Input from "@/components/atoms/input";

export const LocalLogin = () => {
  const navigate = useNavigate();
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const handleOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      localLogin();
    }
  };

  const localLogin = () => {
    postLocalLogin({ id, pw })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.data.accessToken);
        localStorage.setItem("refreshToken", res.data.data.refreshToken);
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.message); // 모달창으로 변경하기
        //console.log(err.response.data.isSuccess);
      });
  };

  return (
    <>
      <InputBox>
        <Input
          type="text"
          value={id}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setId(e.target.value)}
          placeholder="아이디"
        />
        <Input
          type="password"
          value={pw}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPw(e.target.value)}
          placeholder="비밀번호 (영문, 숫자, 특수문자 포함 8~30자)"
          onKeyDown={handleOnKeyPress}
        />
      </InputBox>
      <BlueButton onClick={localLogin}>로그인</BlueButton>
    </>
  );
};

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`;
