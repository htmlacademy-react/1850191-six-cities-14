import { ICityData } from '../../../types';
import { FavoriteCard } from '../favorite-card';


export const FavoriteLocation = ({ city, places }: ICityData) => {
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


