import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../../const/const';
import { AuthInfo } from '../../../types/auth-info';
import { getToken } from '../../../services/token';

type ThunkApiConfig = {
  api: AxiosInstance;
}

export const checkAuthStatus = createAsyncThunk<AuthInfo, void, { extra: ThunkApiConfig }>(
  'authorization/checkAuth',
  async (_, { extra: { api } }) => {
    const token = getToken();
    if (!token) {
      return Promise.reject(new Error('No token present'));
    }
    const response = await api.get<AuthInfo>(APIRoute.Login);
    return response.data;
  }
);
