import { City } from './city';
import { Location } from './location';
import { User } from './user';

export type OfferType = {
  city: City;
  goods: string[];
  id: number;
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
  host: User;
  images: string[];
  maxAdults: number;
};
