import { AuthCallbackStyledComponent } from "./styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
interface UserData {
  nickname: string;
  profile_image_url: string;
}

const AuthCallback = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchKakaoToken = async () => {
      const { code } = router.query;

      if (code) {
        try {
          const response = await axios.post(
            "http://localhost:5000/api/auth/kakao/callback",
            {
              code: code,
            }
          );

          console.log(response.data.user);

          // 카카오 로그인 성공 후, 사용자 정보 저장
          const { nickname, profile_image_url } =
            response.data.user.kakao_account.profile;

          setUserData({
            nickname: nickname,
            profile_image_url: profile_image_url,
          });

          console.log("로그인 성공:", response.data);
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
        {userData ? (
          <div>
            <h1>Welcome, {userData.nickname}!</h1>
            <img src={userData.profile_image_url} alt="Profile" />
          </div>
        ) : (
          <p>로그인 중...</p>
        )}
      </div>
    </AuthCallbackStyledComponent>
  );
};

export default AuthCallback;

// import { AuthCallbackStyledComponent } from "./styled";
// import { useEffect } from "react";

// const AuthCallback = () => {
//   // const navigate = useNavigate();

//   useEffect(() => {
//     const code = new URL(window.location.href).searchParams.get("code");
//     console.log(code);
//     const headers = {
//       "Content-Type": "application/x-www-form-urlencoded",
//     };

//     // fetch(`보내줄 주소?code=${code}`, {
//     //   method: "POST",
//     //   headers: headers,
//     // })
//     //   .then((response) => response.json())
//     //   .then((data) => {
//     //     console.log(data);
//     //     console.log(data.result.user_id);
//     //     console.log(data.result.jwt);
//     //   })
//     //   .catch((error) => {
//     //     console.error("오류 발생", error);
//     //   });
//   }, []);
//   return (
//     <AuthCallbackStyledComponent>
//       <h1>카카오 로그인이 완료되면 보이는 화면입니다.</h1>
//     </AuthCallbackStyledComponent>
//   );
// };
// export default AuthCallback;
