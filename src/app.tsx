import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { AppRoute } from './const/const';
import Layout from './components/commons/layouts';
import { PrivateRoute } from './components/commons/private-route/private-route';
import { PublicRoute } from './components/commons/public-route';
import ScrollToTop from './utils/scroll-top';


const Main = lazy(() => import('./containers/main/main'));
const Favorites = lazy(() => import('./containers/favorites/favorites'));
const Offer = lazy(() => import('./containers/offer/offer'));
const Login = lazy(() => import('./containers/login/login'));
const NotFound = lazy(() => import('./containers/not-found/not-found'));


const App = (): JSX.Element => (
  <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Main} element={
          <Layout pageClass="page--gray page--main" mainClass="page__main--index" showFooter={false}>
            <Suspense fallback={<p>Loading...</p>}><Main /></Suspense>
          </Layout>
        }
        />
        <Route path={AppRoute.Favorites} element={
          <Layout pageClass="page--gray page--favorites">
            <Suspense fallback={<p>Loading...</p>}>
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            </Suspense>
          </Layout>
        }
        />
        <Route path={`${AppRoute.Offer}/:id`} element={
          <Layout mainClass="page__main--offer" showFooter={false}>
            <Suspense fallback={<p>Loading...</p>}><Offer /></Suspense>
          </Layout>
        }
        />
        <Route path={AppRoute.Login} element={
          <Layout pageClass="page--gray page--login" mainClass="page__main--login" showFooter={false} showNav={false}>
            <Suspense fallback={<p>Loading...</p>}>
              <PublicRoute>
                <Login />
              </PublicRoute>
            </Suspense>
          </Layout>
        }
        />
        <Route path={AppRoute.NotFound} element={
          <Layout pageClass="page--gray page--not-found">
            <Suspense fallback={<p>Loading...</p>}><NotFound /></Suspense>
          </Layout>
        }
        />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
