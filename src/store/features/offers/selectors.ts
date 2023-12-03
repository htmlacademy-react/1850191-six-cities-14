import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../configure-store';
import { sorting } from '../../../utils/sorting';
import { OfferType } from '../../../types/offer-preview';
import { NearPlacesType } from '../../../types/near-place';

export const selectCurrentCity = (state: RootState) => state.propertyOffers.currentCity;
export const selectOffers = (state: RootState) => state.propertyOffers.offers;
export const selectCurrentSorting = (state: RootState) => state.propertyOffers.currentSorting;
export const offerLoading = (state: RootState) => state.propertyOffers.loadingOffers;
export const nearPlacesLoading = (state: RootState) => state.propertyOffers.loadingNearPlaces;

export const selectSortedOffers = createSelector(
  [selectOffers, selectCurrentSorting],
  (offers, currentSorting): OfferType[] => sorting[currentSorting](offers)
);

export const selectFilteredOffers = createSelector(
  [selectSortedOffers, selectCurrentCity],
  (sortedOffers, currentCity): OfferType[] => sortedOffers.filter((offer) => offer.city.name === currentCity)
);

export const selectNearPlacesOffers = createSelector(
  [(state: RootState) => state.propertyOffers.nearPlaces],
  (nearPlaces): NearPlacesType => nearPlaces
);

export const selectCurrentCityDetails = createSelector(
  [selectOffers, selectCurrentCity],
  (offers, currentCityName) => {
    const offerForCurrentCity = offers.find((offer) => offer.city.name === currentCityName);
    return offerForCurrentCity ? offerForCurrentCity.city : null;
  }
);
