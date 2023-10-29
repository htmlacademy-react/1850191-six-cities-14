export enum AppRoute {
  Main = '/',
  Favorites = '/favorites',
  Offer = '/offer',
  OfferId = '/offer/:id',
  Login = '/login',
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
