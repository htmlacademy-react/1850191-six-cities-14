import { RootState } from '../../configure-store';

export const selectFavoritesOffers = (state: RootState) => state.favorites.offers;
export const selectFavoritesLoading = (state: RootState) => state.favorites.loading;
