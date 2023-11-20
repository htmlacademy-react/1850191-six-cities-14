import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferType } from '../../../types/offer-preview';

import { api } from '../../configure-store';


export const fetchOffers = createAsyncThunk(
  'offers/fetchOffers',
  async () => {
    const response = await api.get<OfferType[]>('/offers');
    return response.data;
  }
);

export const fetchOffersByCity = createAsyncThunk(
  'offers/fetchOffersByCity',
  async (cityName: string) => {
    const response = await api.get<OfferType[]>(`/offers?city=${cityName}`);
    return response.data;
  }
);
