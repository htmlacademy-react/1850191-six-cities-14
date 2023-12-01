import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../../const/const';
import { checkAuthStatus } from './thunk-check-auth';
import { AuthInfo } from '../../../types/auth-info';

type AuthorizationState = {
  authorizationStatus: AuthorizationStatus;
  statusLogin: 'idle' | 'loading' | 'error' | 'success';
  user: AuthInfo | null;
}

const initialState: AuthorizationState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  statusLogin: 'idle',
  user: null
};

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setAuthorizationStatus(state, action: PayloadAction<AuthorizationStatus>) {
      state.authorizationStatus = action.payload;
    },
    updateUserAndStatus(state, action: PayloadAction<{ user: AuthInfo | null; status: 'idle' | 'loading' | 'error' | 'success' }>) {
      state.user = action.payload.user;
      state.statusLogin = action.payload.status;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthStatus.pending, (state) => {
        state.statusLogin = 'loading';
        state.user = null;
      })
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.statusLogin = 'success';
        state.user = action.payload;
      })
      .addCase(checkAuthStatus.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.statusLogin = 'error';
        state.user = null;
      });
  }
});

export const { setAuthorizationStatus, updateUserAndStatus } = authorizationSlice.actions;
export default authorizationSlice.reducer;
