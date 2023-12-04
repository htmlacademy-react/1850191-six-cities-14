import axios, { AxiosError, AxiosInstance } from 'axios';
import { getToken } from '../services/token';
import { ErrorTypes } from '../const/const';

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
        const statusCode = error.response.status;
        switch (statusCode) {
          case ErrorTypes.NotFound:
            return Promise.reject(new Error('Not Found'));
          case ErrorTypes.BadRequest:
            return Promise.reject(new Error('Bad Request'));
          case ErrorTypes.Unauthorized:
            return Promise.reject(new Error('Unauthorized'));
          default:
            return Promise.reject(error);
        }
      }
      return Promise.reject(error);
    }
  );
  return api;
};
