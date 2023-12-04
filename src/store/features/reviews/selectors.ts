import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../configure-store';
import { ReviewType } from '../../../types/review-type';

export const selectReviewsState = (state: RootState) => state.reviews;

export const selectReviews = createSelector(
  [selectReviewsState],
  (state) => state.reviews
);

export const selectAllReviewsCount = createSelector(
  [selectReviews],
  (reviews) => reviews.length
);

export const selectLoadingReviews = createSelector(
  [selectReviewsState],
  (state) => state.loadingReviews
);

export const selectPostReviewData = createSelector(
  [selectReviewsState],
  (state) => state.postReviewData
);

export const selectPostReviewLoading = createSelector(
  [selectReviewsState],
  (state) => state.postReviewLoading
);

export const selectPostReviewError = createSelector(
  [selectReviewsState],
  (state) => state.postReviewError
);

export const selectSortedAndLimitedReviews = createSelector(
  [selectReviews],
  (reviews: ReviewType): ReviewType => reviews
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10)
);
