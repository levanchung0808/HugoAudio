import axiosInstance from "../../utils/AxiosInstance";

export const onGetProducts = async () => {
  const result = await axiosInstance().get("/product/get-products");
  return result;
};
