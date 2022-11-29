import axiosInstance from "../../utils/AxiosInstance";

export const register = async (username, password) => {
  const data = { username, password };
  const result = await axiosInstance().post("/users/dang-ky", data);
  console.log(result);
  return result;
};

export const login = async (username, password) => {
  const data = { username, password };
  const result = await axiosInstance().post("/users/dang-nhap", data);
  console.log(result);
  return result;
};
