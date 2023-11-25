import { createSlice } from '@reduxjs/toolkit';
import { OfferType } from '../../../types/offer-preview';
import { fetchOfferById } from './thunk-offer';

interface CurrentOfferState {
  offer: OfferType | null;
}

const initialState: CurrentOfferState = {
  offer: null,
};

const currentOfferSlice = createSlice({
  name: 'currentOffer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfferById.fulfilled, (state, action) => {
        state.offer = action.payload;
      });
  },
});

export default currentOfferSlice.reducer;

