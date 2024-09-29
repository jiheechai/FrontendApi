import React from "react";

const KakaoLoginButton = () => {
  const handleLogin = () => {
    const kakaoClientId = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;

    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientId}&redirect_uri=${redirectUri}&response_type=code`;

    window.location.href = kakaoAuthUrl; // 카카오 로그인 페이지로 이동
  };

  return (
    <button onClick={handleLogin}>
      <img
        src="https://developers.kakao.com/assets/img/about/logos/kakaologin/kr/kakao_account_login_btn_medium_narrow.png"
        alt="카카오 로그인"
      />
    </button>
  );
};

export default KakaoLoginButton;
