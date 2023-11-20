import { RootState } from '../store/configure-store';
import { OffersState } from '../store/features/offers';
import { OfferType } from '../types/offer-preview';

// получение списка всех уникальных городов,
export const getCities = (state: RootState) => state.offers.cities;

// фильтрация, чтобы получить все предложения, соответствующие городу.
export const getOffersByCity = (offersState: OffersState, city: string): OfferType[] =>
  offersState.offers.filter((offer) => offer.city.name === city);
