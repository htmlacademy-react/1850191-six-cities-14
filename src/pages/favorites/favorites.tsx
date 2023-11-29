import { FavoriteLocation } from '../../components/favorites/favorite-location/favorite-location ';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { selectFavoritesLoading, selectFavoritesOffers } from '../../store/features/favorites/selectors';
import { Spinner } from '../../components/commons/spinner';
import { fetchFavorites } from '../../store/features/favorites/thunk-favorites';
import { useEffect } from 'react';


const Favorites = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector(selectFavoritesOffers);
  const loading = useAppSelector(selectFavoritesLoading);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);


  if (loading) {
    return <Spinner />;
  }

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
