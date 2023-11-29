import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postReview } from './thunk-post-review';
import { Review } from '../../../types/review-type';
import { SerializedError } from '@reduxjs/toolkit';


interface PostReviewState {
  postReviewData: Review | null;
  postReviewLoading: boolean;
  postReviewError: string | null;
}

const initialState: PostReviewState = {
  postReviewData: null,
  postReviewLoading: false,
  postReviewError: null,
};

const postReviewSlice = createSlice({
  name: 'postReview',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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

export default postReviewSlice.reducer;
