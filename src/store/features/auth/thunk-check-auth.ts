import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../../const/const';
import { AuthInfo } from '../../../types/auth-info';

interface ThunkApiConfig {
  api: AxiosInstance;
}

export const checkAuthStatus = createAsyncThunk<AuthInfo, void, { extra: ThunkApiConfig }>(
  'authorization/checkAuth',
  async (_, { extra: { api } }) => {
    const response = await api.get<AuthInfo>(APIRoute.Login);
    return response.data;
  }
);
