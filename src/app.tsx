import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import classNames from 'classnames';

import { AppRoute } from './const/const';
import Layout from './components/commons/layouts';
import { PrivateRoute } from './components/commons/private-route/private-route';
import { PublicRoute } from './components/commons/public-route';

import browserHistory from './providers/history-route/browser-history';
import HistoryRouter from './providers/history-route/history-route';

import { selectFavoritesOffers } from './store/features/favorites/selectors';
import { fetchOffers } from './store/features/offers/thunk-offers';
import { useAppDispatch, useAppSelector } from './hooks/use-store-hooks';
import { checkAuthStatus } from './store/features/auth/thunk-check-auth';
import { selectIsAuthCheckedAndAuthorized } from './store/features/auth/selectors';
import { fetchFavorites } from './store/features/favorites/thunk-favorites';
import { Spinner } from './components/commons/spinner';
import ScrollToTop from './utils/scroll-top';

const Main = lazy(() => import('./pages/main/main'));
const Favorites = lazy(() => import('./pages/favorites/favorites'));
const FavoritesEmpty = lazy(() => import('./pages/favorites-empty/favorites-empty'));
const Offer = lazy(() => import('./pages/offer/offer'));
const Login = lazy(() => import('./pages/login/login'));
const NotFound = lazy(() => import('./pages/not-found/not-found'));

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isAuthCheckedAndAuthorized = useAppSelector(selectIsAuthCheckedAndAuthorized);

  useEffect(() => {
    dispatch(checkAuthStatus());
    dispatch(fetchOffers());
  }, [dispatch]);

  useEffect(() => {
    if (isAuthCheckedAndAuthorized) {
      dispatch(fetchFavorites());
    }
  }, [dispatch, isAuthCheckedAndAuthorized]);

  const favoriteOffers = useAppSelector(selectFavoritesOffers);

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.Main} element={
            <Layout
              pageClass={classNames('page--gray', 'page--main')}
              mainClass="page__main--index"
              showFooter={false}
            >
              <Suspense fallback={<Spinner />}>
                <Main />
              </Suspense>
            </Layout>
          }
          />
          <Route path={AppRoute.Favorites} element={
            <Layout pageClass="page--gray page--favorites">
              <Suspense fallback={<Spinner />}>
                <PrivateRoute>
                  {favoriteOffers.length > 0 ? <Favorites /> : <FavoritesEmpty />}
                </PrivateRoute>
              </Suspense>
            </Layout>
          }
          />
          <Route path={`${AppRoute.Offer}/:id`} element={
            <Layout mainClass="page__main--offer" showFooter={false}>
              <Suspense fallback={<Spinner />}><Offer /></Suspense>
            </Layout>
          }
          />
          <Route path={AppRoute.Login} element={
            <Layout pageClass="page--gray page--login" mainClass="page__main--login" showFooter={false} showNav={false}>
              <Suspense fallback={<Spinner />}>
                <PublicRoute>
                  <Login />
                </PublicRoute>
              </Suspense>
            </Layout>
          }
          />
          <Route path={AppRoute.NotFound} element={
            <Layout pageClass="page--gray page--not-found">
              <Suspense fallback={<Spinner />}><NotFound /></Suspense>
            </Layout>
          }
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
};

export default App;
