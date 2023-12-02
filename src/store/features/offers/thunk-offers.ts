import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferType } from '../../../types/offer-preview';
import { APIRoute } from '../../../const/const';

type ThunkApiConfig = {
  api: AxiosInstance;
}

export const fetchOffers = createAsyncThunk<OfferType[], void, { extra: ThunkApiConfig }>(
  'offers/fetchOffers',
  async (_arg, { extra: { api } }) => {
    const response = await api.get<OfferType[]>(APIRoute.Offers);
    return response.data;
  }
);


