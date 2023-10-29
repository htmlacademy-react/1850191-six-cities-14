import { FavoriteLocation } from '../../components/favorites/favorite-location/favorite-location ';
import { Helmet } from 'react-helmet-async';
import { OfferType } from '../../mocks/offers';

type FavoritesProps = {
  offers: OfferType[];
};

const Favorites = ({ offers }: FavoritesProps): JSX.Element => (
  <div className="page__favorites-container container">
    <Helmet>
      <title>{'6 cities-Favorites'}</title>
    </Helmet>
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <FavoriteLocation offers={offers} />
    </section>
  </div>
);
export default Favorites;
