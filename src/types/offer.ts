import { OfferType } from './offer-preview';
import { User } from './user';

export type Offer = OfferType & {
  bedrooms: number;
  description: string;
  host: User;
  images: string[];
  maxAdults: number;
};
