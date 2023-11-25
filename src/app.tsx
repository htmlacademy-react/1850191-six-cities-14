import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { AppRoute } from './const/routes';
import Layout from './components/commons/layouts';
import { PrivateRoute } from './components/commons/private-route/private-route';
import { ReviewType } from './types/review-type';


const Main = lazy(() => import('./containers/main/main'));
const Favorites = lazy(() => import('./containers/favorites/favorites'));
const Offer = lazy(() => import('./containers/offer/offer'));
const Login = lazy(() => import('./containers/login/login'));
const NotFound = lazy(() => import('./containers/not-found/not-found'));

type AppProps = {
  reviews: ReviewType;
};

const App = ({ reviews }: AppProps): JSX.Element => (
  <HelmetProvider>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={AppRoute.Main} element={<Suspense fallback={<p>Loading...</p>}><Main /></Suspense>} />
          <Route path={AppRoute.Favorites} element={
            <Suspense fallback={<p>Loading...</p>}>
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            </Suspense>
          }
          />
          <Route path={`${AppRoute.Offer}/:id`} element={<Suspense fallback={<p>Loading...</p>}><Offer reviews={reviews} /></Suspense>} />
          <Route path={AppRoute.Login} element={<Suspense fallback={<p>Loading...</p>}><Login /></Suspense>} />
          <Route path={AppRoute.NotFound} element={<Suspense fallback={<p>Loading...</p>}><NotFound /></Suspense>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;