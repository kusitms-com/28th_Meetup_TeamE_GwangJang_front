import axios from "axios";

import { emailCodeType, localRegisterType, loginType } from "@/types";

const GwangjangAxios = axios.create({
  baseURL: "https://api.gwang-jang.co.kr",
});

export const postLocalLogin = async ({ id, pw }: loginType) => {
  const res = await GwangjangAxios.post("/member/auth/signIn", { id, pw });
  return res;
};

export const postKakaoLogin = async (Code: string | null) => {
  const res = await GwangjangAxios.post("/member/auth/signIn/kakao", { token: Code });
  return res;
};

export const getDuplicateNickname = async (nickname: string) => {
  const res = await GwangjangAxios.get(`/member/auth/nickname/${nickname}`);
  return res;
};

export const postEmail = async (email: string) => {
  const res = await GwangjangAxios.post(`/member/auth/email/${email}`);
  return res;
};

export const postEmailCode = async ({ email, emailCode }: emailCodeType) => {
  const res = await GwangjangAxios.post("/member/auth/email", { email, code: emailCode });
  return res;
};

export const putLocalRegister = async ({
  userId,
  password2,
  nickname,
  gender,
  email,
  birthDate,
}: localRegisterType) => {
  const res = await GwangjangAxios.put("/member/auth/signUp/local", {
    id: userId,
    pw: password2,
    nickname,
    gender,
    email,
    birthDate,
  });
  return res;
};
