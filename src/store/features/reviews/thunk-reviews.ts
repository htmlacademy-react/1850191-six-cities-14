import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../../const/const';
import { ReviewType } from '../../../types/review-type';

interface ThunkApiConfig {
  api: AxiosInstance;
}

export const fetchReviews = createAsyncThunk<ReviewType, string, { extra: ThunkApiConfig }>(
  'offer/reviews',
  async (offerId, { extra: { api } }) => {
    const response = await api.get<ReviewType>(`${APIRoute.Reviews}/${offerId}`);
    return response.data;
  }
);
