import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sorting } from '../../../utils/sorting';
import { CityName } from '../../../const/const';
import { OfferType } from '../../../types/offer-preview';
import { SortingType } from '../../../types/sorting';
import { NearPlacesType } from '../../../types/near-place';
import { fetchNearPlaces } from './thunk-near-places';
import { fetchOffers } from './thunk-offers';

export type OffersState = {
  currentCity: CityName;
  offers: OfferType[];
  currentSorting: SortingType;
  loadingOffers: boolean;
  nearPlaces: NearPlacesType;
  loadingNearPlaces: boolean;
}

const initialState: OffersState = {
  currentCity: CityName.Paris,
  offers: [],
  currentSorting: 'Popular',
  loadingOffers: false,
  nearPlaces: [],
  loadingNearPlaces: false,
};

const offersSlice = createSlice({
  name: 'propertyOffers',
  initialState,
  reducers: {
    cityChange: (state, action: PayloadAction<CityName>) => {
      state.currentCity = action.payload;
    },
    sortedOffers: (state) => {
      state.offers = sorting[state.currentSorting](state.offers);
    },
    currentSorting: (state, action: PayloadAction<SortingType>) => {
      state.currentSorting = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.loadingOffers = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.loadingOffers = false;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.loadingOffers = false;
      })
      .addCase(fetchNearPlaces.pending, (state) => {
        state.loadingNearPlaces = true;
      })
      .addCase(fetchNearPlaces.fulfilled, (state, action) => {
        state.nearPlaces = action.payload;
        state.loadingNearPlaces = false;
      })
      .addCase(fetchNearPlaces.rejected, (state) => {
        state.loadingNearPlaces = false;
      });
  }
});

export const {
  cityChange,
  sortedOffers,
  currentSorting,
} = offersSlice.actions;

export default offersSlice.reducer;
