import { configureStore, combineReducers } from '@reduxjs/toolkit';
import offersReducer from './features/offers';
import authorizationReducer from './features/auth';
import currentOfferReducer from './features/offer-active';
import hoverOfferIdReducer from './features/offer-card-hover';
import reviewsReducer from './features/reviews';
import favoritesReducer from './features/favorites';
import errorReducer from './features/errors';

import { apiClient } from '../services/api-client';

export const api = apiClient();

const rootReducer = combineReducers({
  propertyOffers: offersReducer,
  currentOffer: currentOfferReducer,
  authorization: authorizationReducer,
  hoverOfferId: hoverOfferIdReducer,
  reviews: reviewsReducer,
  favorites: favoritesReducer,
  error: errorReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { api },
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
