import { LoginPageStyled } from "@/features/LoginPage/styled";
import { KAKAO_AUTH_URL } from "./KakaoAuthUrl";
import KakaoLoginButton from "@/components/KakaoLoginButton";
const LoginPage = () => {
  const handleLogin = () => {
    if (typeof window !== "undefined") {
      // 클라이언트에서만 실행
      window.location.href = KAKAO_AUTH_URL;
    }
  };

  return (
    <LoginPageStyled>
      <h1>로그인 화면입니다.</h1>
      {/* <KakaoButton imgUrl={logoBtnImg} onClick={handleLogin} /> */}
      {/* <button onClick={handleLogin}>
        <img
          src="https://developers.kakao.com/assets/img/about/logos/kakaologin/kr/kakao_account_login_btn_medium_narrow.png"
          alt="카카오 로그인"
        />
      </button> */}
      <KakaoLoginButton />
    </LoginPageStyled>
  );
};
export default LoginPage;
