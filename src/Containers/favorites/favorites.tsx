import { FavoriteLocation } from '../../components/favorites/favorite-location/favorite-location ';
import data from '../../assets/data.json';
import { Helmet } from 'react-helmet-async';

const Favorites = () => (
  <div className="page__favorites-container container">
    <Helmet>
      <title>{'6 cities-Favorites'}</title>
    </Helmet>
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {data.Places.map((cityData) => (
          <FavoriteLocation key={cityData.city} city={cityData.city} places={cityData.places} />
        ))}
      </ul>
    </section>
  </div>
);
export default Favorites;
