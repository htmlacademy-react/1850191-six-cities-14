import { createAsyncThunk } from '@reduxjs/toolkit';

import { APIRoute, AppRoute, AuthorizationStatus } from '../../../const/const';
import { AxiosInstance } from 'axios';
import { AuthInfo } from '../../../types/auth-info';
import { AuthData } from '../../../types/auth-data';

import { saveToken } from '../../../services/token';
import { setAuthorizationStatus, updateUserAndStatus } from './';
import { redirectToRoute } from '../../middleware/action';


export const login = createAsyncThunk<AuthInfo, AuthData,{ extra: { api: AxiosInstance }}> (
  'authorization/login',
  async (authData, { dispatch, extra: { api } }) => {
    const response = await api.post<AuthInfo>(APIRoute.Login, authData);
    const userData = response.data;
    saveToken(userData.token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(updateUserAndStatus({ user: userData, status: 'success' }));
    dispatch(redirectToRoute(AppRoute.Main));
    return userData;
  }
);
