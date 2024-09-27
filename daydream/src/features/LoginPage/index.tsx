import { LoginPageStyled } from "@/features/LoginPage/styled";
import { KAKAO_AUTH_URL } from "./KakaoAuthUrl";
const LoginPage = () => {
  function handleLogin() {
    window.location.href = KAKAO_AUTH_URL;
  }

  return (
    <LoginPageStyled>
      <h1>로그인 화면입니다.</h1>
      {/* <KakaoButton imgUrl={logoBtnImg} onClick={handleLogin} /> */}
      <button onClick={handleLogin}>
        <img
          src="https://developers.kakao.com/assets/img/about/logos/kakaologin/kr/kakao_account_login_btn_medium_narrow.png"
          alt="카카오 로그인"
        />
      </button>
    </LoginPageStyled>
  );
};
export default LoginPage;
