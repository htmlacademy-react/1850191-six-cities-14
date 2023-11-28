import { createAsyncThunk } from '@reduxjs/toolkit';

import { APIRoute, AuthorizationStatus } from '../../../const/const';
import { AxiosInstance } from 'axios';
import { AuthInfo } from '../../../types/auth-info';
import { AuthData } from '../../../types/auth-data';

import { saveToken } from '../../../services/token';
import { setAuthorizationStatus } from '.';
import { setUserInfo } from '../user';


export const login = createAsyncThunk<
  AuthInfo,
  AuthData,
  {
    extra: { api: AxiosInstance };
  }
>(
  'authorization/login',
  async (authData, { dispatch, extra: { api } }) => {
    const response = await api.post<AuthInfo>(APIRoute.Login, authData);
    const userData = response.data;
    saveToken(userData.token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(setUserInfo(userData));
    return userData;
  }
);
