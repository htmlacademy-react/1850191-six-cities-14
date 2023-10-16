import { ICityData } from '../../../types';
import FavoriteCard from '../favorite-card/favorite-card';

const FavoriteLocation = ({ city, places }: ICityData) => { // добавлен places
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {places.filter((place) => place.isBookmarked).map((place) => (
          <FavoriteCard key={place.id} {...place} />
        ))}
      </div>
    </li>
  );
};

export default FavoriteLocation;
