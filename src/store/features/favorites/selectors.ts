import { RootState } from '../../configure-store';

export const selectFavoritesOffers = (state: RootState) => state.favorites.offers;
export const selectFavoritesLoading = (state: RootState) => state.favorites.loading;
export const selectFavoriteData = (state: RootState) => state.favorites.favoriteData;
export const selectFavoriteLoading = (state: RootState) => state.favorites.favoriteLoading;
export const selectFavoriteError = (state: RootState) => state.favorites.favoriteError;
