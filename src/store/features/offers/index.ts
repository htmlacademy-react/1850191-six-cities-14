import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getOffersByCity } from '../../../utils/offers';
import { sorting } from '../../../utils/sorting';

import { SortingType } from '../../../types/sorting';
import { OfferType } from '../../../types/offer-preview';

import { fetchOffers } from './thunks';
import { CityName } from '../../../const/routes';

export interface OffersState {
  currentCity: CityName;
  offers: OfferType[];
  allOffers: OfferType[];
  currentSorting: SortingType;
  loading: boolean;
}

const initialState: OffersState = {
  currentCity: CityName.Paris,
  offers: [],
  allOffers: [],
  currentSorting: 'Popular',
  loading: false,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    changeCity(state, action: PayloadAction<CityName>) {
      state.currentCity = action.payload;
    },
    updateOffers(state, action: PayloadAction<CityName>) {
      const filteredOffers = getOffersByCity(state, action.payload);
      state.offers = sorting[state.currentSorting](filteredOffers);
    },
    changeSorting(state, action: PayloadAction<SortingType>) {
      state.currentSorting = action.payload;
      // тут поравить нельзя менять что то еще нужно разбить или делать в компоненте одно действие один метод
      state.offers = sorting[action.payload](state.offers);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.allOffers = action.payload;
        // тут поравить нельзя менять что то еще нужно разбить или делать в компоненте одно действие один метод
        state.offers = getOffersByCity(state, state.currentCity);
        state.loading = false;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { changeCity, updateOffers, changeSorting } = offersSlice.actions;
export default offersSlice.reducer;
