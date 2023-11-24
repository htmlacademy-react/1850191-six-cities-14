import { RootState } from '../../configure-store';

// селектор для статуса авторизации
export const selectAuthorizationStatus = (state: RootState) => state.userAuth.authorizationStatus;
// селектор для информации пользователя
export const selectUserInfo = (state: RootState) => state.userAuth.userInfo;
