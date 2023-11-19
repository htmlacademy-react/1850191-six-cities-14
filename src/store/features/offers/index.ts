import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getOffersByCity } from '../../../utils/offers';
import { sorting } from '../../../utils/sorting';

import { SortingType } from '../../../types/sorting';
import { api } from '../../configure-store';
import { Offer } from '../../../types/offer';
import { CityName } from '../../../const/routes';

interface OffersState {
  currentCity: CityName;
  offers: Offer[];
  currentSorting: SortingType;
}

const initialState: OffersState = {
  currentCity: CityName.Paris,
  offers: [],
  currentSorting: 'Popular',
};

export const fetchOffers = createAsyncThunk(
  'offers/fetchOffers',
  async () => {
    const response = await api.get<Offer[]>('/offers');
    return response.data;
  }
);

export const fetchOffersByCity = createAsyncThunk(
  'offers/fetchOffersByCity',
  async (cityName: CityName) => {
    const response = await api.get<Offer[]>(`/offers?city=${cityName}`);
    return response.data;
  }
);

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    changeCity(state, action: PayloadAction<CityName>) {
      state.currentCity = action.payload;

    },
    updateOffers(state, action: PayloadAction<CityName>) {
      state.offers = getOffersByCity(action.payload);
    },
    changeSorting(state, action: PayloadAction<SortingType>) {
      state.currentSorting = action.payload;
      state.offers = sorting[action.payload](state.offers);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
      })
      .addCase(fetchOffersByCity.fulfilled, (state, action) => {
        state.offers = action.payload;
      });
  },
});

export const { changeCity, updateOffers, changeSorting } = offersSlice.actions;
export default offersSlice.reducer;
