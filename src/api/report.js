import axiosInstance from "./axiosInstance";

export const getReports = async () => {
  const res = await axiosInstance.get("/reports");
  return res.data;
};

export const getMonthlyReports = async () => {
  const res = await axiosInstance.get('/monthly');
  return res.data.results; // ✅ results만 반환
};

export const getReportDetail = async (id) => {
  const res = await axiosInstance.get(`/reports/${id}`);
  return res.data;
};

export const patchReport = async (id, payload) => {
  const res = await axiosInstance.patch(`/reports/${id}`, payload);
  return res.data;
};

export const getStatistics = async () => {
  const res = await axiosInstance.get("/reports/statistics");
  return res.data;
};

export const downloadExcel = async (brand, date) => {
  const res = await axiosInstance.get("/admin/reports/excel/download", {
    params: { brand, date },
    responseType: 'blob'
  });
  return res;
};