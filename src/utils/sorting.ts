
import { OfferType } from '../types/offer-preview';
import { SortingType } from '../types/sorting';

const sortByRating = (a: OfferType, b: OfferType) => b.rating - a.rating;
const sortLowToHight = (a: OfferType, b: OfferType) => a.price - b.price;
const sortHightToLow = (a: OfferType, b: OfferType) => b.price - a.price;

/** сортировка предложений */
const sorting: Record<SortingType, (offers:OfferType[]) => OfferType[]> =
{
  Popular: (offers:OfferType[]) => offers.slice(),
  HighToLow: (offers:OfferType[]) => offers.toSorted(sortHightToLow),
  LowToHigh: (offers:OfferType[]) => offers.toSorted(sortLowToHight),
  TopRated: (offers:OfferType[]) => offers.toSorted(sortByRating),
};

export {sorting};
