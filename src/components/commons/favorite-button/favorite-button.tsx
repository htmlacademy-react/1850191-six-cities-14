import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/use-store-hooks';
import { changeFavoriteStatus } from '../../../store/features/favorites/thunk-post-favorites';
import { selectFavoritesOffers } from '../../../store/features/favorites/selectors';
import { selectAuthorizationStatus } from '../../../store/features/auth/selectors';
import { AppRoute, AuthorizationStatus } from '../../../const/const';
import { OfferType } from '../../../types/offer-preview';
import { updateOffers } from '../../../store/features/favorites';


type FavoriteButtonProps = {
  offer: OfferType;
  buttonClass: string;
  buttonActiveClass: string;
  iconClass: string;
  iconWidth: number;
  iconHeight: number;
};

export const FavoriteButton = memo(({
  offer, buttonClass, buttonActiveClass, iconClass, iconWidth, iconHeight
}: FavoriteButtonProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const favorites = useAppSelector(selectFavoritesOffers);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);


  const isFavorite = favorites.some((favoriteOffer) => favoriteOffer.id === offer.id);

  const handleFavoriteClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }

    const newStatus = !isFavorite;

    dispatch(changeFavoriteStatus({ id: offer.id, status: newStatus ? 1 : 0 }))
      .then(() => {
        dispatch(updateOffers({ ...offer, isFavorite: newStatus }));
      });
  };

  return (
    <button
      className={`button ${buttonClass} ${isFavorite ? buttonActiveClass : ''}`}
      type="button"
      onClick={handleFavoriteClick}
    >
      <svg className={iconClass} width={iconWidth} height={iconHeight}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
    </button>
  );
});

FavoriteButton.displayName = 'FavoriteButton';
