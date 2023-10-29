export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '*',
}

export enum AuthorixationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const ReviewSymbolLength = {
  MIN: 50,
  MAX: 300
} as const;


export enum CityName {
  Paris = 'Paris',
  Cologne= 'Cologne',
  Brussels= 'Brussels',
  Amsterdam= 'Amsterdam',
  Humburg= 'Humburg',
  Dusseldorf= 'Dusseldorf',
}
