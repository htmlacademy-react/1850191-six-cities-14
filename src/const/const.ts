export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const ReviewSymbolLength = {
  MIN: 50,
  MAX: 300
} as const;

export const cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const MapMarkerSVG = {
  DEFAULT: '../../markup/img/pin.svg',
  CURRENT: '../../markup/img/pin-active.svg',
} as const;

export const SortingMap = {
  Popular: 'Popular',
  LowToHight: 'Price: low to hight',
  HightToLow: 'Price: hight to low',
  TopRated: 'Top rated first',
} as const;

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  NearPlaces = '/nearby',
  Reviews = '/comments',
  Favorite = '/favorite',
}

export const RATING_STARS = [5, 4, 3, 2, 1];
