import { RootState } from '../../configure-store';

export const selectCurrentOffer = (state: RootState) => state.currentOffer.offer;
