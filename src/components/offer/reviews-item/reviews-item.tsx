import { memo, useMemo } from 'react';
import { Review } from '../../../types/review-type';

type ReviewsItemProps = {
  review: Review;
};

export const ReviewsItem = memo(({ review }: ReviewsItemProps): JSX.Element => {

  const ratingStyle = useMemo(() => ({
    width: `${review.rating * 20}%`
  }), [review.rating]);

  const formattedDate = new Date(review.date).toLocaleString('en-US', { month: 'long', year: 'numeric' });

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={ratingStyle} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime={review.date}>
          {formattedDate}
        </time>
      </div>
    </li>
  );
});

ReviewsItem.displayName = 'ReviewsItem';
