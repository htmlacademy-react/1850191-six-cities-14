import { Helmet } from 'react-helmet-async';

const FavoritesEmpty = () => (
  <div className="page__favorites-container container">
    <Helmet>
      <title>{'6 cities-Favorites-empty'}</title>
    </Helmet>
    <section className="favorites favorites--empty">
      <h1 className="visually-hidden">Favorites (empty)</h1>
      <div className="favorites__status-wrapper">
        <b className="favorites__status">Nothing yet saved.</b>
        <p className="favorites__status-description">
          Save properties to narrow down search or plan your future trips.
        </p>
      </div>
    </section>
  </div>

);

export default FavoritesEmpty;
