import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/store-hooks';
import { changeFavoriteStatus } from '../../../store/features/favorites/thunk-post-favorites';
import { selectFavoritesOffers } from '../../../store/features/favorites/selectors';
import { selectAuthorizationStatus } from '../../../store/features/auth/selectors';
import { AppRoute, AuthorizationStatus } from '../../../const/const';
import { OfferType } from '../../../types/offer-preview';

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

    const newStatus = isFavorite ? 0 : 1;
    dispatch(changeFavoriteStatus({ id: offer.id, status: newStatus }));
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
