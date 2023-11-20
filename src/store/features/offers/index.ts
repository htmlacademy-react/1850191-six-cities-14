import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getOffersByCity } from '../../../utils/offers';
import { sorting } from '../../../utils/sorting';

import { SortingType } from '../../../types/sorting';
import { OfferType } from '../../../types/offer-preview';

import { fetchOffers, fetchOffersByCity } from './thunks';

export interface OffersState {
  currentCity: string;
  offers: OfferType[];
  currentSorting: SortingType;
  cities: string[];
}

const initialState: OffersState = {
  currentCity: 'Paris',
  offers: [],
  currentSorting: 'Popular',
  cities: [],
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    changeCity(state, action: PayloadAction<string>) {
      state.currentCity = action.payload;
    },
    updateOffers(state, action: PayloadAction<string>) {
      const filteredOffers = getOffersByCity(state, action.payload);
      state.offers = sorting[state.currentSorting](filteredOffers);
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
        state.cities = Array.from(new Set(action.payload.map((offer) => offer.city.name)));
      })
      .addCase(fetchOffersByCity.fulfilled, (state, action) => {
        state.offers = action.payload;
      });
  },
});

export const { changeCity, updateOffers, changeSorting } = offersSlice.actions;
export default offersSlice.reducer;
