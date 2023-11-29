import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { changeFavoriteStatus } from './thunk-post-favorites';
import { OfferType } from '../../../types/offer-preview';
import { SerializedError } from '@reduxjs/toolkit';

type FavoriteStatusState ={
  favoriteData: OfferType | null;
  favoriteLoading: boolean;
  favoriteError: string | null;
}

const initialState: FavoriteStatusState = {
  favoriteData: null,
  favoriteLoading: false,
  favoriteError: null,
};

const favoriteStatusSlice = createSlice({
  name: 'favoriteStatus',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changeFavoriteStatus.pending, (state) => {
        state.favoriteLoading = true;
        state.favoriteError = null;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action: PayloadAction<OfferType>) => {
        state.favoriteData = action.payload;
        state.favoriteLoading = false;
      })
      .addCase(changeFavoriteStatus.rejected, (state, action: PayloadAction<unknown, string, unknown, SerializedError>) => {
        state.favoriteLoading = false;
        state.favoriteError = action.error.message || 'Error changing favorite status';
      });
  },
});

export default favoriteStatusSlice.reducer;
