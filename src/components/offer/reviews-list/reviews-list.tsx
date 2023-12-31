import { memo } from 'react';
import { ReviewType } from '../../../types/review-type';
import { ReviewsItem } from '../reviews-item';

type ReviewsListProps = {
  reviews: ReviewType;
};

export const ReviewsList = memo(({ reviews }: ReviewsListProps): JSX.Element => (
  <ul className="reviews__list">
    {reviews.map((review) => (
      <ReviewsItem key={review.id} review={review} />
    ))}
  </ul>
));

ReviewsList.displayName = 'ReviewsList';
