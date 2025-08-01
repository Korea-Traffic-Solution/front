import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { useAuth } from "../contexts/AuthContext";

function LoginPage() {
  const navigate = useNavigate();
  const { setToken, setAdminInfo } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axiosInstance.post("/auth/login", {
        loginId: username,
        password,
      });

      const result = response?.data?.results?.[0];
      const token = result?.token;

      if (token) {
        // 토큰 저장
        setToken(token);
        localStorage.setItem("token", token);

        // 관리자 정보 저장
        setAdminInfo({
          name: result.name,
          region: result.region,
        });

        navigate("/home");
      } else {
        setError("로그인 실패: 토큰이 없습니다.");
      }
    } catch (error) {
      console.error("로그인 에러:", error);
      if (error.response?.data?.message) {
        setError("로그인 실패: " + error.response.data.message);
      } else {
        setError("서버 오류 또는 네트워크 문제");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">관리자 로그인</h1>
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80">
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded"
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          로그인
        </button>
        {error && <p className="text-red-500 mt-4 text-sm">{error}</p>}
      </form>
    </div>
  );
}

export default LoginPage;
