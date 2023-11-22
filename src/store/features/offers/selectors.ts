import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../configure-store';
import { sorting } from '../../../utils/sorting';
import { OfferType } from '../../../types/offer-preview';

export const selectCurrentCity = (state: RootState) => state.offers.currentCity;
export const selectAllOffers = (state: RootState) => state.offers.allOffers;
export const selectCurrentSorting = (state: RootState) => state.offers.currentSorting;

export const selectOffers = createSelector(
  [selectAllOffers, selectCurrentCity, selectCurrentSorting],
  (allOffers, currentCity, currentSorting): OfferType[] => {
    const filteredOffers = allOffers.filter((offer) => offer.city.name === currentCity);
    return sorting[currentSorting](filteredOffers);
  }
);
