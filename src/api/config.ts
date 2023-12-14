import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
} from 'axios';

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API,
  headers: {
    'Content-Type': 'application/json',
  },
};

const axiosInstance: AxiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  function (response: AxiosResponse<unknown>) {
    return response.data;
  },
  function (error: AxiosError) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.replace('');
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
