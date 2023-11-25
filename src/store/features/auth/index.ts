import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../../const/routes';

interface AuthorizationState {
  authorizationStatus: AuthorizationStatus;
}

const initialState: AuthorizationState = {
  authorizationStatus: AuthorizationStatus.Unknown
};

const authorizationSlice = createSlice({
  name: 'requireAuthorization',
  initialState,
  reducers: {
    setAuthorizationStatus(state, action: PayloadAction<AuthorizationStatus>) {
      state.authorizationStatus = action.payload;
    }
  }
});

export const { setAuthorizationStatus } = authorizationSlice.actions;
export default authorizationSlice.reducer;
