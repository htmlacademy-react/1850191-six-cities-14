import { FavoriteLocation } from '../../components/favorites/favorite-location/favorite-location ';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/store-hooks';
import { selectFavoriteOffers } from '../../store/features/offers/selectors';


const Favorites: React.FC = () => {
  const favoriteOffers = useAppSelector(selectFavoriteOffers);

  return (
    <div className="page__favorites-container container">
      <Helmet>
        <title>{'6 cities-Favorites'}</title>
      </Helmet>
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <FavoriteLocation offers={favoriteOffers} />
      </section>
    </div>
  );
};

export default Favorites;
