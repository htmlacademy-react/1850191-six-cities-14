import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../../const/const';
import { ReviewType } from '../../../types/review-type';
import { setError } from '../errors';
import { Dispatch } from '@reduxjs/toolkit';

type ThunkApiConfig = {
  api: AxiosInstance;
}

type MyErrorPayload = {
  message: string;
}

export const fetchReviews = createAsyncThunk<ReviewType, string, { extra: ThunkApiConfig; dispatch: Dispatch; rejectWithValue: (payload: MyErrorPayload) => unknown }>(
  'offer/reviews',
async (offerId, { extra: { api }, dispatch, rejectWithValue }) => {
  try {
    const response = await api.get<ReviewType>(`${APIRoute.Reviews}/${offerId}`);
    return response.data;
  } catch (error) {
    dispatch(setError('Ошибка при загрузке отзывов'));
    return rejectWithValue({});
  }
}
);
