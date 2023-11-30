import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const/const';
import { OfferType } from '../../../types/offer-preview';
import { capitalize } from '../../../utils/common';
import { FavoriteButton } from '../favorite-button';
import { memo, useCallback, useMemo } from 'react';
import { useAppDispatch } from '../../../hooks/store-hooks';
import { setHoveredOfferId, resetHoveredOfferId } from '../../../store/features/offer-card';
import classNames from 'classnames';

type CardsProps = {
  offer: OfferType;
  cardType: 'main' | 'offer' | 'favorite';
};

export const Cards = memo(({ offer, cardType }: CardsProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const isFavoriteCard = cardType === 'favorite';


  const cardClass = classNames({
    'cities__card': cardType === 'main',
    'near-places__card': cardType === 'offer',
    'favorites__card': cardType === 'favorite',
  });

  const imageWrapperClass = classNames('place-card__image-wrapper', {
    'favorites__image-wrapper': cardType === 'favorite'
  });

  const cardInfoClass = classNames('place-card__info', {
    'favorites__card-info': cardType === 'favorite'
  });

  const imageSize = isFavoriteCard ? { width: 150, height: 110 } : { width: 260, height: 200 };

  const handlemouseEnter = useCallback(() => {
    if (!isFavoriteCard) {
      dispatch(setHoveredOfferId(offer.id));
    }
  }, [dispatch, offer.id, isFavoriteCard]);

  const handlemouseLeave = useCallback(() => {
    if (!isFavoriteCard) {
      dispatch(resetHoveredOfferId());
    }
  }, [dispatch, isFavoriteCard]);

  const ratingStyle = useMemo(() => ({
    width: `${(offer.rating / 5) * 100}%`
  }), [offer.rating]);

  return (
    <article
      className={`${cardClass} place-card`}
      onMouseEnter={handlemouseEnter}
      onMouseLeave={handlemouseLeave}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${imageWrapperClass}`}>
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            {...imageSize}
            alt={offer.title}
          />
        </Link>
      </div>
      <div className={cardInfoClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <FavoriteButton
            offer={offer}
            buttonClass="place-card__bookmark-button"
            buttonActiveClass="place-card__bookmark-button--active"
            iconClass="place-card__bookmark-icon"
            iconWidth={18}
            iconHeight={19}
          />
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

Cards.displayName = 'Cards';
