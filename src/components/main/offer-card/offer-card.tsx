import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const/routes';
import { OfferType } from '../../../types/offer-preview';
import { capitalize } from '../../../utils/common';


type OfferCardProps = {
  offer: OfferType;
  onCardHover?: (id: OfferType['id'] | null) => void;
};

export const OfferCard = ({ offer, onCardHover }: OfferCardProps): JSX.Element => {
  const { previewImage, price, title, isFavorite, type, isPremium, rating, id } = offer;

  function HandlemouseEnter() {
    onCardHover?.(id);
  }

  function HandlemouseLeave() {
    onCardHover?.(null);
  }

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={HandlemouseEnter}
      onMouseLeave={HandlemouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
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
        {rating && (
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: `${(rating / 5) * 100}%` }} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
        )}
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
};
