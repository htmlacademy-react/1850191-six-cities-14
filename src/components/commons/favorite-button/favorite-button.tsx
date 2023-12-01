import { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/store-hooks';
import { changeFavoriteStatus } from '../../../store/features/favorites/thunk-post-favorites';
import { updateOffers } from '../../../store/features/favorites'; // Убедитесь, что этот экшн экспортирован из вашего слайса
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
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const [isFavoriteLocal, setIsFavoriteLocal] = useState(offer.isFavorite);

  useEffect(() => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      setIsFavoriteLocal(false);
    }
  }, [authorizationStatus]);

  const handleFavoriteClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }

    const newStatus = !isFavoriteLocal;
    setIsFavoriteLocal(newStatus);

    dispatch(changeFavoriteStatus({ id: offer.id, status: newStatus ? 1 : 0 }))
      .then(() => {
        dispatch(updateOffers({ ...offer, isFavorite: newStatus })); // Обновление Redux Store после изменения статуса избранного
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
