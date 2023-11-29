import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../../const/const';
import { OfferType } from '../../../types/offer-preview';

interface FavoriteData {
  id: string;
  status: 0 | 1;
}

export const changeFavoriteStatus = createAsyncThunk<OfferType, FavoriteData, { extra: { api: AxiosInstance } }>(
  'favorites/changeStatus',
  async ({ id, status }, { extra: { api } }) => {
    const response = await api.post<OfferType>(`${APIRoute.Favorite}/${id}/${status}`);
    return response.data;
  }
);
