import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null); // ✅ 초기값 null (undefined 아님)
  const [adminInfo, setAdminInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // ✅ 로딩 상태

  useEffect(() => {
    localStorage.removeItem("token");
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
    setIsLoading(false); // ✅ 로딩 완료 후만 렌더링되도록
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, adminInfo, setAdminInfo, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
