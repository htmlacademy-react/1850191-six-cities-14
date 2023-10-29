import { OfferType } from '../../../types/offer-preview';
import { FavoriteCard } from '../favorite-card';


type FavoriteLocationProps = {
  offers: OfferType[];
};

export const FavoriteLocation = ({ offers }: FavoriteLocationProps): JSX.Element => (
  <ul className="favorites__list">
    {offers.filter((offer) => offer.isFavorite)?.map((offer) => (
      <li key={offer.id} className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{offer.city.name}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          <FavoriteCard offer={offer} />
        </div>
      </li>
    ))}
  </ul>
);
