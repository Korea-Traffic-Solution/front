import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

function HomePage() {
  const [reports, setReports] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axiosInstance.get("/report/monthly");
        if (typeof response.data === "string") {
          throw new Error("서버에서 JSON이 아닌 HTML을 반환함 (아마 인증 실패)");
        }

        const reports = response.data?.results;
        if (!Array.isArray(reports)) {
          throw new Error("신고내역 데이터 형식이 올바르지 않습니다.");
        }

        setReports(reports);
      } catch (err) {
        console.error("🚨 에러:", err.message);
        setError("서버 통신 오류가 발생했습니다.");
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">🚦 관리자 홈</h1>
      <p className="text-gray-600 mb-4">최근 신고 내역 미리 보기</p>

      {error && <p className="text-red-500">{error}</p>}

      <ul className="space-y-2">
        {reports.map((report, index) => (
          <li key={index} className="p-2 border rounded">
            <strong>{report.title}</strong> - {report.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
