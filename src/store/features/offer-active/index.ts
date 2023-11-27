import { createSlice } from '@reduxjs/toolkit';
import { OfferType } from '../../../types/offer-preview';
import { fetchOfferById } from './thunk-offer';

interface CurrentOfferState {
  offer: OfferType | null;
  loading: boolean;
  requestCompleted: boolean;
}

const initialState: CurrentOfferState = {
  offer: null,
  loading: false,
  requestCompleted: false,
};

const currentOfferSlice = createSlice({
  name: 'currentOffer',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfferById.pending, (state) => {
        state.loading = true;
        state.requestCompleted = false;
      })
      .addCase(fetchOfferById.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.loading = false;
        state.requestCompleted = true;
      })
      .addCase(fetchOfferById.rejected, (state) => {
        state.loading = false;
        state.requestCompleted = true;
      });
  },
});

export default currentOfferSlice.reducer;

