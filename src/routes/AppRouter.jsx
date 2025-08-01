import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import StatisticsPage from "../pages/StatisticsPage";
import ExcelPage from "../pages/ExcelPage";
import NoticePage from "../pages/NoticePage";

function AppRouter() {
  const { token, isLoading } = useAuth();

  if (isLoading) return null; // ✅ 로딩 완료 전 렌더링 중지

  const isLoggedIn = !!token; // ✅ 명확한 불리언 처리

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <LoginPage />} />
        <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/" />} />
        <Route path="/statistics" element={isLoggedIn ? <StatisticsPage /> : <Navigate to="/" />} />
        <Route path="/excel" element={isLoggedIn ? <ExcelPage /> : <Navigate to="/" />} />
        <Route path="/notices" element={isLoggedIn ? <NoticePage /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
