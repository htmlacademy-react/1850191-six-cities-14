import axios, { AxiosError, AxiosInstance } from 'axios';
import { getToken } from '../services/token';

const BACKEND_URL = 'https://14.design.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

export const apiClient = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT
  });

  /** Перехватчик запросов */
  api.interceptors.request.use((config) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers['x-token'] = token;
    }
    return config;
  });

  /** Перехватчик ответов */
  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            return Promise.reject(new Error('Bad request'));
          case 404:
            return Promise.reject(new Error('Not found'));
          default:
            return Promise.reject(error);
        }
      }

      return Promise.reject(error);
    }
  );
  return api;
};
