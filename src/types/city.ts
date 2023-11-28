import { CityName } from '../const/const';

export type CityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  location: CityLocation;
  name: CityName;
};
