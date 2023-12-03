import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchReviews } from './thunk-reviews';
import { postReview } from './thunk-post-review';
import { ReviewType, Review } from '../../../types/review-type';
import { SerializedError } from '@reduxjs/toolkit';

type ReviewsState = {
  reviews: ReviewType;
  loadingReviews: boolean;
  postReviewData: Review | null;
  postReviewLoading: boolean;
  postReviewError: string | null;
}

const initialState: ReviewsState = {
  reviews: [],
  loadingReviews: false,
  postReviewData: null,
  postReviewLoading: false,
  postReviewError: null,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loadingReviews = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.loadingReviews = false;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.loadingReviews = false;
      })
      .addCase(postReview.pending, (state) => {
        state.postReviewLoading = true;
        state.postReviewError = null;
      })
      .addCase(postReview.fulfilled, (state, action: PayloadAction<Review>) => {
        state.postReviewData = action.payload;
        state.postReviewLoading = false;
      })
      .addCase(postReview.rejected, (state, action: PayloadAction<unknown, string, unknown, SerializedError>) => {
        state.postReviewLoading = false;
        state.postReviewError = action.error.message || 'Error posting review';
      });
  },
});

export default reviewsSlice.reducer;
