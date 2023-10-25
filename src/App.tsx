import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { AppRoute } from './const/routes';
import Layout from './components/commons/layouts';
import { PrivateRoute } from './components/commons/private-route/private-route';
import { OfferType } from './mocks/offers';


const Main = lazy(() => import('./containers/main/main'));
const Favorites = lazy(() => import('./containers/favorites/favorites'));
const Offer = lazy(() => import('./containers/offer/offer'));
const Login = lazy(() => import('./containers/login/login'));
const NotFound = lazy(() => import('./containers/not-found/not-found'));

type AppProps = {
  offers: OfferType[];
};


const App = ({ offers }: AppProps): JSX.Element => (
  <HelmetProvider>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={AppRoute.Main} element={<Suspense fallback={<p>Loading...</p>}><Main offers={offers} /></Suspense>} />
          <Route path={AppRoute.Favorites} element={
            <Suspense fallback={<p>Loading...</p>}>
              <PrivateRoute>
                <Favorites offers={offers} />
              </PrivateRoute>
            </Suspense>
          }
          />
          <Route path={AppRoute.Offer} element={<Suspense fallback={<p>Loading...</p>}><Offer /></Suspense>} />
          <Route path={AppRoute.OfferId} element={<Suspense fallback={<p>Loading...</p>}><Offer /></Suspense>} />
          <Route path={AppRoute.Login} element={<Suspense fallback={<p>Loading...</p>}><Login /></Suspense>} />
          <Route path={AppRoute.NotFound} element={<Suspense fallback={<p>Loading...</p>}><NotFound /></Suspense>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
