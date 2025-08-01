import axiosInstance from "./axiosInstance";

export const login = async (loginId, password) => {
  const res = await axiosInstance.post("/auth/login", { loginId, password });
  return res.data;
};