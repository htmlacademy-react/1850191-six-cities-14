import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../../const/routes';
import { AuthInfo } from '../../../types/auth-info';

interface UserAuthState {
  authorizationStatus: AuthorizationStatus;
  userInfo: AuthInfo | null;
}

const initialState: UserAuthState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null
};

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    setAuthorizationStatus(state, action: PayloadAction<AuthorizationStatus>) {
      state.authorizationStatus = action.payload;
    },
    setUserInfo(state, action: PayloadAction<AuthInfo | null>) {
      state.userInfo = action.payload;
    }
  }
});

export const { setAuthorizationStatus, setUserInfo } = userAuthSlice.actions;
export default userAuthSlice.reducer;
