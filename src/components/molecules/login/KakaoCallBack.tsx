import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { postKakaoLogin } from "@/apis";
import Loading from "@/components/atoms/Loading";
import { accessTokenState } from "@/recoil/atoms";

export const KakaoCallBack = () => {
  const navigate = useNavigate();
  const setAccessToken = useSetRecoilState(accessTokenState);

  useEffect(() => {
    const Code = new URL(window.location.href).searchParams.get("code");
    postKakaoLogin(Code)
      .then((res) => {
        console.log(res);
        if (res.data.data.registrationStatus) {
          localStorage.setItem("accessToken", res.data.data.accessToken);
          localStorage.setItem("refreshToken", res.data.data.refreshToken);
          navigate("/");
        } else {
          setAccessToken(res.data.data.accessToken);
          navigate("/addInfomation");
        }
        // res -> "registrationStatus": true navigate / 라우팅 false 이면  navigate /addInfomation
        //navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.message);
        navigate("/login");
      });
  }, [navigate, setAccessToken]);

  return <Loading />;
};
