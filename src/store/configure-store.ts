import { configureStore, combineReducers } from '@reduxjs/toolkit';
import offersReducer from './features/offers';
import authorizationReducer from './features/auth';
import currentOfferReducer from './features/offer-active';
import userReducer from './features/user';
import hoverOfferIdReducer from './features/offer-card';
import nearPlacesReducer from './features/near-places';
import reviewsReducer from './features/reviews';
import postReviewReducer from './features/post-reviews';
import favoritesReducer from './features/favorites';
import { apiClient } from '../services/api-client';

export const api = apiClient();

const rootReducer = combineReducers({
  offers: offersReducer,
  currentOffer: currentOfferReducer,
  authorization: authorizationReducer,
  user: userReducer,
  hoverOfferId: hoverOfferIdReducer,
  nearPlaces: nearPlacesReducer,
  reviews: reviewsReducer,
  postReview: postReviewReducer,
  favorites: favoritesReducer,
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
