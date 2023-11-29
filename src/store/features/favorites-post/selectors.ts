import { RootState } from '../../configure-store';

export const selectFavoriteData = (state: RootState) => state.postFavorites.favoriteData;
export const selectFavoriteLoading = (state: RootState) => state.postFavorites.favoriteLoading;
export const selectFavoriteError = (state: RootState) => state.postFavorites.favoriteError;
