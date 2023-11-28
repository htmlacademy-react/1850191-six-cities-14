import { Review } from '../../../types/review-type';
import { RootState } from '../../configure-store';

export const selectPostReviewData = (state: RootState): Review | null => state.postReview.postReviewData;
export const selectPostReviewLoading = (state: RootState): boolean => state.postReview.postReviewLoading;
export const selectPostReviewError = (state: RootState): string | null => state.postReview.postReviewError;
