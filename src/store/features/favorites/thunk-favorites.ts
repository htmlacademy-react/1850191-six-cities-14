import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../../const/const';
import { OfferType } from '../../../types/offer-preview';

interface ThunkApiConfig {
  api: AxiosInstance;
}

export const fetchFavorites = createAsyncThunk<OfferType[], void, { extra: ThunkApiConfig }>(
  'offers/favorites',
  async (_, { extra: { api } }) => {
    const response = await api.get<OfferType[]>(`${APIRoute.Favorite}`);
    return response.data;
  }
);
