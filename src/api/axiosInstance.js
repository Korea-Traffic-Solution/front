import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://ace02d415d9d.ngrok-free.app/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: false, // 쿠키 사용 안함 (JWT만 사용)
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  console.log("💬 Axios 인터셉터 토큰:", token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    console.log("✅ Authorization 붙음:", config.headers.Authorization);
  } else {
    console.warn("❌ 토큰이 없음 - Authorization 헤더 안 붙음");
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (typeof response.data === "string" && response.data.startsWith("<!DOCTYPE html>")) {
      console.warn("🚨 서버에서 HTML 반환됨 (아마 인증 실패)");
      throw new Error("인증 실패로 인해 데이터를 가져올 수 없습니다.");
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;