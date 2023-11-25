import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../../const/routes';
import { AxiosInstance } from 'axios';
import { dropToken } from '../../../network/token';
import { setAuthorizationStatus } from '../auth';
import { setUserInfo } from '../user';
import { AuthorizationStatus } from '../../../const/routes';

export const logout = createAsyncThunk<void, undefined, { extra: { api: AxiosInstance } }>(
  'authorization/logout',
  async (_arg, { dispatch, extra: { api } }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    dispatch(setUserInfo(null));
  }
);
