import { City } from './city';
import { Location } from './location';
import { AuthInfo } from './auth-info';

export type OfferType = {
  city: City;
  goods: string[];
  id: string;
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
  bedrooms: number;
  description: string;
  host: AuthInfo;
  images: string[];
  maxAdults: number;
};
