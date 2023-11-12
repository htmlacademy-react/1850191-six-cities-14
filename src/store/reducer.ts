import { createReducer } from '@reduxjs/toolkit';

import { changeCity, changeSorting, updateOffers } from './actions';
import { getCities, getOffersByCity } from '../utils/offers';
import { sorting } from '../utils/sorting';

const cities = getCities();
const [defaultCity] = cities;

const initialState = {
  currentCity: 'Paris',
  offers: getOffersByCity(defaultCity),
  currentSorting: 'Popular',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
      state.offers = getOffersByCity(action.payload);
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = getOffersByCity(action.payload);
    })
    .addCase(changeSorting, (state, action) => {
      state.currentSorting = action.payload;
      state.offers = sorting[action.payload](state.offers);
    });
});
