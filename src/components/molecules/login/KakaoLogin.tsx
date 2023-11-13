import kakao_logo from "@/assets/kakao-talk.svg";
import { KakaoButton } from "@/components/atoms/button";

const KakaoLogin = ({ page }: { page: string }) => {
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_APP_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_APP_REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <KakaoButton onClick={handleKakaoLogin}>
      <p>
        <img
          src={kakao_logo}
          alt="Kakao"
        />
      </p>
      {page === "login" ? <p>카카오로 로그인</p> : <p>카카오로 3초만에 시작하기</p>}
    </KakaoButton>
  );
};

export default KakaoLogin;
