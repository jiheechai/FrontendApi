import { AuthCallbackStyledComponent } from "./styled";
import { useEffect } from "react";

const AuthCallback = () => {
  // const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code);
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    // fetch(`보내줄 주소?code=${code}`, {
    //   method: "POST",
    //   headers: headers,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     console.log(data.result.user_id);
    //     console.log(data.result.jwt);
    //   })
    //   .catch((error) => {
    //     console.error("오류 발생", error);
    //   });
  }, []);
  return (
    <AuthCallbackStyledComponent>
      <h1>카카오 로그인이 완료되면 보이는 화면입니다.</h1>
    </AuthCallbackStyledComponent>
  );
};
export default AuthCallback;
