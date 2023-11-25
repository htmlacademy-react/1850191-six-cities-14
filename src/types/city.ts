import { CityName } from '../const/routes';

export type CityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  location: CityLocation;
  name: CityName;
};
