import axios from "axios";

import { addRegisterType, emailCodeType, localRegisterType, loginType } from "@/types";

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

export const getDuplicateId = async (userId: string) => {
  const res = await GwangjangAxios.get(`/member/auth/loginId/${userId}`);
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

export const postLocalRegister = async ({
  userId,
  password2,
  nickname,
  gender,
  email,
  birthDate,
}: localRegisterType) => {
  const res = await GwangjangAxios.post("/member/auth/signUp", {
    id: userId,
    pw: password2,
    nickname,
    gender,
    email,
    birthDate,
  });
  return res;
};

export const putKakaoRegister = async ({
  nickname,
  gender,
  birth,
  accessToken,
}: addRegisterType) => {
  const res = await GwangjangAxios.put(
    "/member/auth/signUp/kakao",
    {
      nickname,
      gender,
      birthDate: birth,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return res;
};

export const getCommunityAllData = async () => {
  const res = await GwangjangAxios.get("/community");
  return res;
};

export const getCommunityAreaData = async (topicId: number) => {
  const res = await GwangjangAxios.get(`/community/topic/${topicId}`);
  return res;
};

//내가 구독한 주제
export const getMySubscribeData = async (accessToken: string) => {
  const res = await GwangjangAxios.get("/member/subscribe", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

//좋아요한 커뮤니티 글
export const getMyLikeCommunityData = async (accessToken: string) => {
  const res = await GwangjangAxios.get("/community/mypage", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

//내가 쓴 커뮤니티 글
export const getMyWriteCommunityData = async (accessToken: string) => {
  const res = await GwangjangAxios.get("/community/mywrite", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const postMyLikeContentsData = async (accessToken: string) => {
  const res = await GwangjangAxios.post(
    "/contents/my-page/like",
    {
      data: [],
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return res;
};
