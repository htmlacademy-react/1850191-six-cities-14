import { memo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/store-hooks';
import { changeFavoriteStatus } from '../../../store/features/favorites/thunk-post-favorites';
import { selectAuthorizationStatus } from '../../../store/features/auth/selectors';
import { AppRoute, AuthorizationStatus } from '../../../const/const';
import { useNavigate } from 'react-router-dom';
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
  const [isFavoriteLocal, setIsFavoriteLocal] = useState(offer.isFavorite);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const navigate = useNavigate();

  const handleFavoriteClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }

    const newStatus = !isFavoriteLocal;
    setIsFavoriteLocal(newStatus);

    dispatch(changeFavoriteStatus({ id: offer.id, status: newStatus ? 1 : 0 }))
      .then(() => {
        dispatch(updateOffers({ ...offer, isFavorite: newStatus }));
      });
  };

  return (
    <button
      className={`button ${buttonClass} ${isFavoriteLocal ? buttonActiveClass : ''}`}
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

