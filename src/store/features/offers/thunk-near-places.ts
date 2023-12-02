import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { NearPlacesType } from '../../../types/near-place';
import { APIRoute } from '../../../const/const';

type ThunkApiConfig = {
  api: AxiosInstance;
}

export const fetchNearPlaces = createAsyncThunk<NearPlacesType, string, { extra: ThunkApiConfig }>(
  'offer/nearPlaces',
  async (offerId, { extra: { api } }) => {
    const response = await api.get<NearPlacesType>(`${APIRoute.Offers}/${offerId}${APIRoute.NearPlaces}`);
    return response.data;
  }
);
