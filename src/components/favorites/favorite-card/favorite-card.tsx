import { Link } from 'react-router-dom';
import { OfferType } from '../../../types/offer-preview';
import { AppRoute } from '../../../const/const';

type FavoriteCardProps = {
  offer: OfferType;
};

export const FavoriteCard = ({ offer }: FavoriteCardProps): JSX.Element => (
  <article className="favorites__card place-card">
    {offer.isPremium && (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    )}
    <div className="favorites__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img
          className="place-card__image"
          src={offer.previewImage}
          width={150}
          height={110}
          alt="Place image"
        />
      </a>
    </div>
    <div className="favorites__card-info place-card__info">
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
          <span className="visually-hidden">In bookmarks</span>
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
        <Link to={AppRoute.Offer}>
          {offer.title}
        </Link>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>
);
