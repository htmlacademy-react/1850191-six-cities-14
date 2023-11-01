import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const/routes';
import { OfferType } from '../../../types/offer-preview';
import { capitalize } from '../../../utils/common';

type OfferCardProps = {
  offer: OfferType;
  onCardHover?: (id: OfferType['id'] | null) => void;
  className?: string;
};

export const OfferCard = ({ offer, onCardHover, className }: OfferCardProps): JSX.Element => {
  function HandlemouseEnter() {
    onCardHover?.(offer.id);
  }

  function HandlemouseLeave() {
    onCardHover?.(null);
  }

  return (
    <article
      className={`${className ? className : 'cities__card'} place-card`}
      onMouseEnter={HandlemouseEnter}
      onMouseLeave={HandlemouseLeave}
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
            alt="Place image"
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
            className={`place-card__bookmark-button button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
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
              <span style={{ width: `${(offer.rating / 5) * 100}%` }} />
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
};
