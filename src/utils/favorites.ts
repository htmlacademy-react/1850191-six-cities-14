import { OfferType } from '../types/offer-preview';

/** обновление списка избранных предложений */
export const updateFavoriteOffersList = (offers: OfferType[], updatedOffer: OfferType): OfferType[] =>
  updatedOffer.isFavorite
    ? [...offers.filter((offer) => offer.id !== updatedOffer.id), updatedOffer]
    : offers.filter((offer) => offer.id !== updatedOffer.id);
