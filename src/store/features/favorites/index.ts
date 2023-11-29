import { createSlice } from '@reduxjs/toolkit';
import { fetchFavorites } from './thunk-favorites';
import { OfferType } from '../../../types/offer-preview';

interface FavoritesState {
  offers: OfferType[];
  loading: boolean;
}

const initialState: FavoritesState = {
  offers: [],
  loading: false,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
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
      });
  },
});

export default favoritesSlice.reducer;
