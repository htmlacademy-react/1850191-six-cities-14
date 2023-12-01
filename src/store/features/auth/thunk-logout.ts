import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../../const/const';
import { AxiosInstance } from 'axios';
import { dropToken } from '../../../services/token';
import { setAuthorizationStatus, updateUserAndStatus } from '../auth';
import { AuthorizationStatus } from '../../../const/const';
import { clearFavorites } from '../favorites';

export const logout = createAsyncThunk<void, undefined, { extra: { api: AxiosInstance } }> (
  'authorization/logout',
  async (_arg, { dispatch, extra: { api } }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(clearFavorites());
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    dispatch(updateUserAndStatus({ user: null, status: 'idle' }));
  }
);
