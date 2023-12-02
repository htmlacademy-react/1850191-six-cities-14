import { createAsyncThunk } from '@reduxjs/toolkit';

import { APIRoute, AppRoute, AuthorizationStatus } from '../../../const/const';
import { AxiosInstance } from 'axios';
import { AuthInfo } from '../../../types/auth-info';
import { AuthData } from '../../../types/auth-data';

import { saveToken } from '../../../services/token';
import { authorizationStatus, userStatus } from './';
import { redirectToRoute } from '../../middleware/action';
import { fetchFavorites } from '../favorites/thunk-favorites';


export const login = createAsyncThunk<AuthInfo, AuthData,{ extra: { api: AxiosInstance }}> (
  'authorization/login',
  async (authData, { dispatch, extra: { api } }) => {
    const response = await api.post<AuthInfo>(APIRoute.Login, authData);
    const userData = response.data;
    saveToken(userData.token);
    dispatch(authorizationStatus(AuthorizationStatus.Auth));
    dispatch(userStatus({ user: userData, status: 'success' }));
    dispatch(fetchFavorites());
    dispatch(redirectToRoute(AppRoute.Main));
    return userData;
  }
);
