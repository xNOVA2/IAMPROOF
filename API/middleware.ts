import axios from 'axios'

const getAccessToken = () => {
  return localStorage.getItem('token');
};

const api = axios.create({
  baseURL: 'https://improof-backend-production.up.railway.app/api', 
});

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