import { lazy, Suspense } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './Components/Commons/private-route/private-route';
import Layout from './Components/Commons/layouts';
import { AppRoute } from './utils/constants/routes';

const Main = lazy(() => import('./Containers/main/main'));
const Favorites = lazy(() => import('./Containers/favorites/favorites'));
const Offer = lazy(() => import('./Containers/offer/offer'));
const Login = lazy(() => import('./Containers/login/login'));
const NotFound = lazy(() => import('./Containers/not-found/not-found'));

const App = (): JSX.Element => (
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
        <Route path={AppRoute.Offer} element={<Suspense fallback={<p>Loading...</p>}><Offer /></Suspense>} />
        <Route path={AppRoute.Login} element={<Suspense fallback={<p>Loading...</p>}><Login /></Suspense>} />
        <Route path={AppRoute.NotFound} element={<Suspense fallback={<p>Loading...</p>}><NotFound /></Suspense>} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
