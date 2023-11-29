import { RootState } from '../../configure-store';

export const selectPostReviewData = (state: RootState) => state.postReview.postReviewData;
export const selectPostReviewLoading = (state: RootState) => state.postReview.postReviewLoading;
export const selectPostReviewError = (state: RootState) => state.postReview.postReviewError;
