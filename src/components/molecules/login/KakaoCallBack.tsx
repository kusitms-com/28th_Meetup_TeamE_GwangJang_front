import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { postKakaoLogin } from "@/apis";
import Loading from "@/components/atoms/Loading";

export const KakaoCallBack = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const Code = new URL(window.location.href).searchParams.get("code");
    postKakaoLogin(Code)
      .then((res) => {
        localStorage.setItem("accessToken", res.data.data.accessToken);
        localStorage.setItem("refreshToken", res.data.data.refreshToken);
        if (res.data.data.registrationStatus) {
          navigate("/");
        } else {
          navigate("/addInfomation");
        }
        // res -> "registrationStatus": true navigate / 라우팅 false 이면  navigate /addInfomation
        //navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.message);
        navigate("/login");
      });
  }, [navigate]);

  return <Loading />;
};
