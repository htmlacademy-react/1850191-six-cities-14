import { memo } from 'react';
import { addPluralEnding } from '../../../utils/common';

type OfferPlaceProps = {
  title: string;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
};

export const OfferPlace = memo(({ title, isPremium, rating, type, bedrooms, maxAdults, price, goods }: OfferPlaceProps): JSX.Element => {
  const ratingPercentage = `${Math.round(rating / 5 * 100)}%`;

  return (
    <>
      {isPremium && (
        <div className="offer__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="offer__name-wrapper">
        <h1 className="offer__name">{title}</h1>
        <button className="offer__bookmark-button button" type="button">
          <svg className="offer__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
        </button>
      </div>
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">
          <span style={{ width: ratingPercentage }} />
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="offer__rating-value rating__value">{rating}</span>
      </div>
      <ul className="offer__features">
        <li className="offer__feature offer__feature--entire">{type}</li>
        <li className="offer__feature offer__feature--bedrooms">{bedrooms} Bedroom{addPluralEnding(bedrooms)}</li>
        <li className="offer__feature offer__feature--adults">Max {maxAdults} adult{addPluralEnding(maxAdults)}</li>
      </ul>
      <div className="offer__price">
        <b className="offer__price-value">€{price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>
      <div className="offer__inside">
        <h2 className="offer__inside-title">What&apos;s inside</h2>
        <ul className="offer__inside-list">
          {goods.map((item) => (
            <li key={item} className="offer__inside-item">{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
});

OfferPlace.displayName = 'OfferPlace';
