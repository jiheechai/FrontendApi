/* 카카오 로그인을 위한 API */

/** 카카오 요청 시 필요한 주소 값 등 */
// const KAKAO_SERVER = 'http://104.50.177.80:5000';
const KAKAO_SERVER = "http://localhost:5000";
const REDIRECT_URI = KAKAO_SERVER + "/member/login/login";
const REST_API_KEY = "21141259dfebc24396801b493a2c7baf"; //REST API KEY
const INITIAL_URL_BASE = "https://kauth.kakao.com/oauth/authorize"; // '카카오로그인'을 클릭할 때 이동하는 URL 중 앞부분
const TOKEN_URL_BASE =
  "https://kauth.kakao.com/oauth/token?grant_type=authorization_code"; // 카카오에서 CODE로 TOKEN을 받아오기 위한 BASE URL
const USER_INFO_URL = "https://kapi.kakao.com/v2/user/me"; // 카카오에서 TOKEN으로 USER정보를 받아오기 위한 BASE URL
export const INITIAL_URL_BASE_FULL =
  INITIAL_URL_BASE +
  "?client_id=" +
  REST_API_KEY +
  "&redirect_uri=" +
  REDIRECT_URI +
  "&response_type=code"; // '카카오로그인'을 클릭할 때 이동하는 URL

/**  카카오에 getTokenFromKakao로 요청하면 받을 수 있는 응답 값*/
export interface TokenResponse {
  token_type?: string;
  access_token: string;
  refresh_token?: string;
  id_token?: string;
  expires_in?: number;
  refresh_token_expires_in?: string;
  scope?: string;
  token?: string;
  id?: number;
}

/**  카카오에 getUserFromKakao로 요청하면 받을 수 있는 응답 값*/
export interface UserInfo {
  id: number;
  connected_at: string;
  properties: {
    nickname: string;
    profile_image?: string; // 640x640
    thumbnail_image?: string; // 110x110
  };
}

/** 1. 카카오에서 CODE로 TOKEN을 받아오기 */
export default async function getTokenFromKakao(authCode: string) {
  const tokenUrl = `${TOKEN_URL_BASE}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${authCode}`;

  const response: TokenResponse = await fetch(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());

  if (response.access_token !== undefined) {
    console.log(
      "response (카카오에서 토큰 값 받기 성공) ....................... : ",
      response
    );
    return response;
  }
}

/** 2. 카카오에서 TOKEN으로 USER정보를 받아오기 */
export async function getUserFromKakao({ access_token }: TokenResponse) {
  const response: UserInfo = await fetch(USER_INFO_URL, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  }).then((res) => res.json());

  if (response.id !== undefined) {
    console.log(
      "response (카카오에서 유저 정보 받기 성공) ....................... : ",
      response
    );
    return response;
  }
}
