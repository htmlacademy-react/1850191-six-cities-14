import { offers } from '../mocks/offers';
import { Offer } from '../types/offer';

// получение списка всех уникальных городов,
export const getCities = () => {
  const cityNames = offers.map((offer) => offer.city.name);

  return [...new Set(cityNames)];
};

// фильтрация, чтобы получить все предложения, соответствующие городу.
export const getOffersByCity = (city: string): Offer[] =>
  offers.filter((offer) => offer.city.name === city);
