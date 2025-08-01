import axiosInstance from "./axiosInstance";

export const getReports = async () => {
  const res = await axiosInstance.get("/api/reports");
  return res.data;
};

export const getMonthlyReports = async () => {
  const res = await axiosInstance.get('/reports/monthly');
  return res.data.results; // ✅ results만 반환
};

export const getReportDetail = async (id) => {
  const res = await axiosInstance.get(`/api/reports/${id}`);
  return res.data;
};

export const patchReport = async (id, payload) => {
  const res = await axiosInstance.patch(`/api/reports/${id}`, payload);
  return res.data;
};

export const getStatistics = async () => {
  const res = await axiosInstance.get("/api/reports/statistics");
  return res.data;
};

export const downloadExcel = async (brand, date) => {
  const res = await axiosInstance.get("/api/admin/reports/excel/download", {
    params: { brand, date },
    responseType: 'blob'
  });
  return res;
};