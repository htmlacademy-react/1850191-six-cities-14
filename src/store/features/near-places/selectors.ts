import { RootState } from '../../configure-store';

export const selectNearPlacesOffers = (state: RootState) => state.nearPlaces.offers;
export const selectNearPlacesLoading = (state: RootState) => state.nearPlaces.loading;
