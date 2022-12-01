import axiosInstance from "../../utils/AxiosInstance";

export const register = async (username, password) => {
  const data = { username, password };
  const result = await axiosInstance().post("/users/dang-ky", data);
  return result;
};

export const login = async (username, password) => {
  const data = { username, password };
  const result = await axiosInstance().post("/users/dang-nhap", data);
  return result;
};

export const getUsers = async () => {
  const result = await axiosInstance().get("/users/get-users");
  return result;
};
