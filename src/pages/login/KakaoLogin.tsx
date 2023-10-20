const KakaoLogin = () => {
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_APP_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_APP_REDIRECT_URI}&response_type=code`;

  //인가코드
  const CODE = new URL(window.location.href).searchParams.get("code");
  console.log(CODE);

  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <>
      <button onClick={handleKakaoLogin}>kakaologin</button>
    </>
  );
};

export default KakaoLogin;
