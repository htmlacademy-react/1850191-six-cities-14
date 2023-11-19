import { Offer } from '../types/offer';
import { SortingType } from '../types/sorting';

const sortByRating = (a: Offer, b: Offer) => b.rating - a.rating;
const sortLowToHight = (a: Offer, b: Offer) => a.price - b.price;
const sortHightToLow = (a: Offer, b: Offer) => b.price - a.price;

const sorting: Record<SortingType, (offers:Offer[]) => Offer[]> =
{
  Popular: (offers:Offer[]) => offers.slice(),
  HightToLow: (offers:Offer[]) => offers.toSorted(sortHightToLow),
  LowToHight: (offers:Offer[]) => offers.toSorted(sortLowToHight),
  TopRated: (offers:Offer[]) => offers.toSorted(sortByRating),
};

export {sorting};
