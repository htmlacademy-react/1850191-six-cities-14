import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sorting } from '../../../utils/sorting';
import { SortingType } from '../../../types/sorting';
import { OfferType } from '../../../types/offer-preview';

import { fetchOffers } from './thunk-offers';
import { CityName } from '../../../const/routes';

export interface OffersState {
  currentCity: CityName;
  offers: OfferType[];
  currentSorting: SortingType;
  loading: boolean;
  requestCompleted: boolean;
}

const initialState: OffersState = {
  currentCity: CityName.Paris,
  offers: [],
  currentSorting: 'Popular',
  loading: false,
  requestCompleted: false,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<CityName>) => {
      state.currentCity = action.payload;
    },
    applySorting: (state) => {
      state.offers = sorting[state.currentSorting](state.offers);
    },
    changeSorting: (state, action: PayloadAction<SortingType>) => {
      state.currentSorting = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.loading = true;
        state.requestCompleted = false;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.loading = false;
        state.requestCompleted = true;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.loading = false;
        state.requestCompleted = true;
      });
  }
});

export const { changeCity, applySorting, changeSorting, setLoading } = offersSlice.actions;
export default offersSlice.reducer;

// changeCity - измененяю выбранный город
// setOffers - получаю список предложений
// applySorting - сортирую список предложений
// changeSorting - меняю сортировку
// setLoading - добавляю загрузку спинера
