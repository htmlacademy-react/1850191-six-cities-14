import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { OfferType } from '../../../types/offer-preview';
import { APIRoute } from '../../../const/routes';

interface ThunkApiConfig {
  api: AxiosInstance;
}

export const fetchOfferById = createAsyncThunk<OfferType, string, { extra: ThunkApiConfig }>(
  'currentOffer/fetchOfferById',
  async (offerId, { extra: { api } }) => {
    const response = await api.get<OfferType>(`${APIRoute.Offers}/${offerId}`);
    return response.data;
  }
);

