import { FavoriteLocation } from '../../Components/Favorites/favorite-location/favorite-location ';
import data from '../../assets/data.json';

const Favorites = () => {
  return (
    <div className="page__favorites-container container">
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
};

export default Favorites;
