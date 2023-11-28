import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../../const/routes';
import { AxiosInstance } from 'axios';
import { Review } from '../../../types/review-type';

interface PostReviewData {
  id: string;
  rating: number;
  comment: string;
}

export const postReview = createAsyncThunk<Review, PostReviewData, { extra: { api: AxiosInstance } }>(
  'reviews/postReview',
  async ({ id, rating, comment }, { extra: { api } }) => {
    const response = await api.post<Review>(`${APIRoute.Reviews}/${id}`, { rating, comment });
    return response.data;
  }
);
