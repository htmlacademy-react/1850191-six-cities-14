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

export const cityList = [
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
  LowToHigh: 'Price: low to high',
  HighToLow: 'Price: high to low',
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
export const MAX_REVIEWS_TO_RENDER = 10;

export enum ErrorTypes {
  NotFound = 404,
  BadRequest = 400,
  Unauthorized = 401,
}
