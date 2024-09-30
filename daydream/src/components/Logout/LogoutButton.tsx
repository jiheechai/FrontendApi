import { useRouter } from "next/router";
import axios from "axios";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/auth/logout", {
        withCredentials: true, // 쿠키 포함
      });
      // 로그아웃 후 리다이렉트 또는 상태 업데이트
      router.push("/"); // 홈 페이지로 이동
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  return <button onClick={handleLogout}>로그아웃</button>;
};

export default LogoutButton;
