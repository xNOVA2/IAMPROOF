import axios from 'axios'

const getAccessToken = () => {
  return localStorage.getItem('token');
};

const api = axios.create({
  baseURL: ' http://128.199.30.51:8000/api', 
});
// http://128.199.30.51:8000/api
api.interceptors.request.use(
  async (config) => {
    const accessToken =  getAccessToken();
    
    config.headers.accessToken = `${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default api;