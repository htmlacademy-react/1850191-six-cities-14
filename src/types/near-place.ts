import { CityName } from '../const/const';
import { Host } from './host';

export type CityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: CityName;
  location: CityLocation;
};

export type NearPlaceType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: CityLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
  previewImage: string;
};

export type NearPlacesType = NearPlaceType[];
