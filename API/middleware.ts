import axios from "axios";

const getAccessToken = () => {
  return localStorage.getItem("token");
};

const api = axios.create({
  baseURL: " http://64.23.247.3:8000/api",
});
api.interceptors.request.use(
  async (config) => {
    const accessToken = getAccessToken();

    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
