import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../configure-store';
import { ReviewType } from '../../../types/review-type';

export const selectReviews = (state: RootState): ReviewType => state.reviews.reviews;
export const selectLoadingReviews = (state: RootState) => state.reviews.loading;

export const selectSortedAndLimitedReviews = createSelector(
  [selectReviews],
  (reviews: ReviewType): ReviewType => reviews
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10)
);
