import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../../const/routes';

interface AuthorizationState {
  status: AuthorizationStatus;
}

const initialState: AuthorizationState = {
  status: AuthorizationStatus.Unknown
};

const requireAuthorizationSlice = createSlice({
  name: 'requireAuthorization',
  initialState,
  reducers: {
    setAuthorizationStatus(state, action: PayloadAction<AuthorizationStatus>) {
      state.status = action.payload;
    }
  }
});

export const { setAuthorizationStatus } = requireAuthorizationSlice.actions;
export default requireAuthorizationSlice.reducer;
