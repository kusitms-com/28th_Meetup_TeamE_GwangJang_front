import React, { useState } from "react";

import styled from "styled-components";

import { BlueButton } from "@/components/atoms/button";
import Input from "@/components/atoms/input";

export const LocalLogin = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  return (
    <>
      <InputBox>
        <Input
          type="text"
          value={id}
          onChange={setId}
          placeholder="아이디"
        />
        <Input
          type="password"
          value={pwd}
          onChange={setPwd}
          placeholder="비밀번호 (영문, 숫자, 특수문자 포함 8~30자)"
        />
      </InputBox>
      <BlueButton>로그인</BlueButton>
    </>
  );
};

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`;
