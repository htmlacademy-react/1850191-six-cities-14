import { createAsyncThunk } from '@reduxjs/toolkit';

import { APIRoute, AuthorizationStatus } from '../../../const/routes';
import { AxiosError, AxiosInstance } from 'axios';
import { AuthInfo } from '../../../types/auth-info';
import { AuthData } from '../../../types/auth-data';

import { saveToken } from '../../../network/token';
import { setAuthorizationStatus } from './';
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
    try {
      const response = await api.post<AuthInfo>(APIRoute.Login, authData);

      if (response.status === 200) {
        const userData = response.data;
        saveToken(userData.token);
        dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
        dispatch(setUserInfo(userData));
        return userData;
      } else {
        throw new Error('Authorization failed');
      }
    } catch (error) {
      let errorMessage = 'An error occurred during the login process.';
      if (error instanceof AxiosError && error.response) {
        if (error.response.status === 400) {
          errorMessage = 'Bad request. Please check your login details.';
        } else if (error.response.status === 401) {
          errorMessage = 'Unauthorized. Invalid email or password.';
        }
        dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
      }
      throw new Error(errorMessage);
    }
  }
);
