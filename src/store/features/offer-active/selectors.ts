import { RootState } from '../../configure-store';

export const selectCurrentOffer = (state: RootState) => state.currentOffer.offer;
export const selectCurrentOfferLoading = (state: RootState) => state.currentOffer.loading;
export const selectRequestCompleted = (state: RootState) => state.currentOffer.requestCompleted;

