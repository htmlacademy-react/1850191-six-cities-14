import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthInfo } from '../../../types/auth-info';

interface UserState {
  userInfo: AuthInfo | null;
}

const initialState: UserState = {
  userInfo: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<AuthInfo | null>) {
      state.userInfo = action.payload;
    }
  }
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
