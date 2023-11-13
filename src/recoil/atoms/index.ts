import { atom } from "recoil";

export const accessTokenState = atom({
  // accessToken 임시 저장 카카오로그인 후, 추가 정보 기입할 때 가져가는 accesstoken 로컬스토리지에 저장하면 안됨.
  key: "src/atoms/auth.tsx-accessTokenState",
  default: "",
});
