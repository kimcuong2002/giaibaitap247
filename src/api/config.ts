import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API,
  headers: {
    'Content-Type': 'application/json',
  },
};

const axiosInstance: AxiosInstance = axios.create(config);

export default axiosInstance;
