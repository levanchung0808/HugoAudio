import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const customAxios = (contentType = "application/json") => {
  const axiosInstance = axios.create({
    baseURL: "https://hugoaudio.herokuapp.com",
    responseType: "json",
  });
  axiosInstance.interceptors.request.use(
    async (config) => {
      const token = await AsyncStorage.getItem("token");
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": contentType,
      };
      return config;
    },
    (err) => Promise.reject(err)
  );
  axiosInstance.interceptors.response.use(
    (res) => res.data,
    (err) => Promise.reject(err)
  ); // callback
  return axiosInstance;
};
export default customAxios;
