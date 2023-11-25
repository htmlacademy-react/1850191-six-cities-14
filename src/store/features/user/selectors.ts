import { RootState } from '../../configure-store';

export const selectUserInfo = (state: RootState) => state.user.userInfo;
