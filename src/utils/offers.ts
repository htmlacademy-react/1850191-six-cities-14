import { CityName } from '../const/const';
import { OffersState } from '../store/features/offers';
import { OfferType } from '../types/offer-preview';

// получение списка всех уникальных городов,
const citiesArray = Object.values(CityName);
export const getCities = () => citiesArray;

// фильтрация, чтобы получить все предложения, соответствующие городу.
export const getOffersByCity = (offersState: OffersState, city: CityName): OfferType[] =>
  offersState.offers.filter((offer) => offer.city.name === city);


