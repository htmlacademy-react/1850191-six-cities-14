
import { OfferType } from '../types/offer-preview';
import { SortingType } from '../types/sorting';

const sortByRating = (a: OfferType, b: OfferType) => b.rating - a.rating;
const sortLowToHight = (a: OfferType, b: OfferType) => a.price - b.price;
const sortHightToLow = (a: OfferType, b: OfferType) => b.price - a.price;

const sorting: Record<SortingType, (offers:OfferType[]) => OfferType[]> =
{
  Popular: (offers:OfferType[]) => offers.slice(),
  HightToLow: (offers:OfferType[]) => offers.toSorted(sortHightToLow),
  LowToHight: (offers:OfferType[]) => offers.toSorted(sortLowToHight),
  TopRated: (offers:OfferType[]) => offers.toSorted(sortByRating),
};

export {sorting};