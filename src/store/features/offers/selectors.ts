import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../configure-store';
import { sorting } from '../../../utils/sorting';
import { OfferType } from '../../../types/offer-preview';

export const selectCurrentCity = (state: RootState) => state.offers.currentCity;
export const selectOffers = (state: RootState) => state.offers.offers;
export const selectCurrentSorting = (state: RootState) => state.offers.currentSorting;

export const selectSortedOffers = createSelector(
  [selectOffers, selectCurrentSorting],
  (offers, currentSorting): OfferType[] => sorting[currentSorting](offers)
);

export const selectFilteredOffers = createSelector(
  [selectSortedOffers, selectCurrentCity],
  (sortedOffers, currentCity): OfferType[] => sortedOffers.filter((offer) => offer.city.name === currentCity)
);

export const selectCurrentCityDetails = createSelector(
  [selectOffers, selectCurrentCity],
  (offers, currentCityName) => {
    const offerForCurrentCity = offers.find((offer) => offer.city.name === currentCityName);
    return offerForCurrentCity ? offerForCurrentCity.city : null;
  }
);

/** selectCurrentCity возвращает текущий выбранный город. */
/** electOffers возвращает текущий список предложений.*/
/** selectCurrentSorting возвращает текущий тип сортировки. */
/** selectSortedOffers создает селектор для сортировки предложений в соответствии с выбранным типом сортировки. */
/** selectFilteredOffers создает селектор для фильтрации предложений по текущему городу. */
/** selectCurrentCityDetails вернет полный объект City на основе текущего CityName */
