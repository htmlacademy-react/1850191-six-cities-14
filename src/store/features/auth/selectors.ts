import { RootState } from '../../configure-store';

export const selectAuthorizationStatus = (state: RootState) => state.authorization.authorizationStatus;
