import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const/const';
import { OfferType } from '../../../types/offer-preview';
import { capitalize } from '../../../utils/common';
import { resetHoveredOfferId, setHoveredOfferId } from '../../../store/features/offer-card';
import { useAppDispatch, useAppSelector } from '../../../hooks/store-hooks';
import { memo, useCallback, useMemo, useState } from 'react';
import { changeFavoriteStatus } from '../../../store/features/favorites/thunk-post-favorites';
import { selectAuthorizationStatus } from '../../../store/features/auth/selectors';

type OfferCardProps = {
  offer: OfferType;
  className?: string;
};

export const OfferCard = memo(({ offer, className }: OfferCardProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [isFavoriteLocal, setIsFavoriteLocal] = useState(offer.isFavorite);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const navigate = useNavigate();

  const handlemouseEnter = useCallback(() => {
    dispatch(setHoveredOfferId(offer.id));
  }, [dispatch, offer.id]);

  const handlemouseLeave = useCallback(() => {
    dispatch(resetHoveredOfferId());
  }, [dispatch]);

  const ratingStyle = useMemo(() => ({
    width: `${(offer.rating / 5) * 100}%`
  }), [offer.rating]);

  const handleFavoriteClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }

    const newStatus = !isFavoriteLocal;
    setIsFavoriteLocal(newStatus);
    dispatch(changeFavoriteStatus({ id: offer.id, status: newStatus ? 1 : 0 }));
  };


  return (
    <article
      className={`${className ? className : 'cities__card'} place-card`}
      onMouseEnter={handlemouseEnter}
      onMouseLeave={handlemouseLeave}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${className ? className.replace('card', 'image-wrapper') : 'cities__image-wrapper'} place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={260}
            height={200}
            alt={offer.title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavoriteLocal ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
            onClick={handleFavoriteClick}
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        {offer.rating && (
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={ratingStyle} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
        )}
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{capitalize(offer.type)}</p>
      </div>
    </article>
  );
});

OfferCard.displayName = 'OfferCard';
