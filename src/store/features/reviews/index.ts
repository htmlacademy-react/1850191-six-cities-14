import { createSlice } from '@reduxjs/toolkit';
import { fetchReviews } from './thunk-reviews';
import { ReviewType } from '../../../types/review-type';


interface reviewsState {
  reviews: ReviewType;
  loading: boolean;
}

const initialState: reviewsState = {
  reviews: [],
  loading: false,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.loading = false;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default reviewsSlice.reducer;

