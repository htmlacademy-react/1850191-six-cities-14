import { createSlice } from '@reduxjs/toolkit';
import { OfferType } from '../../../types/offer-preview';
import { fetchOfferById } from './thunk-offer';

interface CurrentOfferState {
  offer: OfferType | null;
  loading: boolean;
}

const initialState: CurrentOfferState = {
  offer: null,
  loading: false,
};

const currentOfferSlice = createSlice({
  name: 'currentOffer',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfferById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOfferById.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.loading = false;
      })
      .addCase(fetchOfferById.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default currentOfferSlice.reducer;

