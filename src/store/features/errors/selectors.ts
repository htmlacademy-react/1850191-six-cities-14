import { RootState } from '../../configure-store';

export const selectErrorMessage = (state: RootState) => state.error.message;
