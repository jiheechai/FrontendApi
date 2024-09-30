import { AuthCallbackStyledComponent } from "./styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import LogoutButton from "@/components/Logout/LogoutButton";

const AuthCallback = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchKakaoToken = async () => {
      const { code } = router.query;

      if (code) {
        try {
          // 카카오로부터 토큰을 받는 요청
          const response = await axios.post(
            "http://localhost:5000/api/auth/kakao/callback",

            { code: code },
            { withCredentials: true } // 요청에 쿠키 포함
          );

          console.log(response.data.user);
          console.log("로그인 성공:", response.data);
          // 카카오 로그인 성공 후, 사용자 정보 저장
          // const { nickname, profile_image_url } =
          //   response.data.user.kakao_account.profile;

          // setUserData({
          //   nickname: nickname,
          //   profile_image_url: profile_image_url,
          // });
          // 로그인 성공 후, 세션 정보를 가져옴
          const sessionResponse = await fetch(
            "http://localhost:5000/auth/session",
            {
              method: "GET",
              credentials: "include", // 쿠키 포함
            }
          );

          const data = await sessionResponse.json();

          if (data.loggedIn) {
            setIsLoggedIn(true);
            setUser(data.user); // 세션에 저장된 사용자 정보
          } else {
            setIsLoggedIn(false);
          }
          console.log("세션 로그인 상태 확인 성공:", data);
        } catch (error) {
          console.error("카카오 로그인 실패:", error);
        }
      }
    };

    fetchKakaoToken();
  }, [router.query]);

  return (
    <AuthCallbackStyledComponent>
      <div>
        {isLoggedIn ? (
          <div>
            <h2>로그인 상태</h2>
            <p>환영합니다, {user?.properties.nickname}님!</p>
            <LogoutButton />
          </div>
        ) : (
          <p>로그인되지 않았습니다.</p>
        )}
      </div>
    </AuthCallbackStyledComponent>
  );
};

export default AuthCallback;
