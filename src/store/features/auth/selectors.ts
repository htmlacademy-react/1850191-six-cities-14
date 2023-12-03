import { RootState } from '../../configure-store';
import { createSelector } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../../const/const';

export const selectAuthorizationStatus = (state: RootState) => state.authorization.authorizationStatus;
export const selectStatusLogin = (state: RootState) => state.authorization.statusLogin;
export const selectUser = (state: RootState) => state.authorization.user;

/** проверка была ли авторизация проверена и успешна */
export const selectIsAuthCheckedAndAuthorized = createSelector(
  [selectAuthorizationStatus],
  (authStatus: AuthorizationStatus) => authStatus === AuthorizationStatus.Auth
);

/** проверка авторизации проверена и успешна */
export const selectIsUserAuthorized = createSelector(
  selectAuthorizationStatus,
  (status) => status === AuthorizationStatus.Auth
);
