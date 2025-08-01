import { Button, Typography } from "@mui/material";
import { saveAs } from "file-saver";
import axiosInstance from "../api/axiosInstance";

function ExcelPage() {
  const handleDownload = async () => {
    try {
      const res = await axiosInstance.get("/api/report/monthly/download", {
        responseType: "blob", // 파일 다운로드는 반드시 blob
      });

      const blob = new Blob([res.data], { type: "application/vnd.ms-excel" });
      saveAs(blob, "monthly_report.xlsx");
    } catch (err) {
      console.error("엑셀 다운로드 실패:", err);
      alert("엑셀 다운로드에 실패했습니다.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h5" gutterBottom>
        📥 월별 신고 내역 다운로드
      </Typography>
      <Button variant="contained" color="primary" onClick={handleDownload}>
        Excel 파일 다운로드
      </Button>
    </div>
  );
}

export default ExcelPage;
