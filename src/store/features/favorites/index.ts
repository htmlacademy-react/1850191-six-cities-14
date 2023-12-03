import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OfferType } from '../../../types/offer-preview';
import { fetchFavorites } from './thunk-favorites';
import { changeFavoriteStatus } from './thunk-post-favorites';
import { updateFavoriteOffersList } from '../../../utils/favorites';

type FavoritesState = {
  offers: OfferType[];
  loading: boolean;
  favoriteData: OfferType | null;
  favoriteLoading: boolean;
  favoriteError: string | null;
};

const initialState: FavoritesState = {
  offers: [],
  loading: false,
  favoriteData: null,
  favoriteLoading: false,
  favoriteError: null,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    clearFavorites: (state) => {
      state.offers = [];
      state.favoriteData = null;
    },
    updateOffers: (state, action: PayloadAction<OfferType>) => {
      state.offers = updateFavoriteOffersList(state.offers, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.loading = false;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.loading = false;
      })
      .addCase(changeFavoriteStatus.pending, (state) => {
        state.favoriteLoading = true;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action: PayloadAction<OfferType>) => {
        state.favoriteData = action.payload;
        state.favoriteLoading = false;
      })
      .addCase(changeFavoriteStatus.rejected, (state, action) => {
        state.favoriteLoading = false;
        state.favoriteError = action.error.message || 'Error changing favorite status';
      });
  },
});

export const { clearFavorites, updateOffers } = favoritesSlice.actions;
export default favoritesSlice.reducer;
