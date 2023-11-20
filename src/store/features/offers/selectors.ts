import { RootState } from '../../configure-store';

export const selectCurrentCity = (state: RootState) => state.offers.currentCity;
export const selectOffers = (state: RootState) => state.offers.offers;
export const selectCurrentSorting = (state: RootState) => state.offers.currentSorting;
export const selectUniqueCities = (state: RootState) => {
  const offers = state.offers.offers;
  const uniqueCities = Array.from(new Set(offers.map((offer) => offer.city.name)));
  return uniqueCities;
};
