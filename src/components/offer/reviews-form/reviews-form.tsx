import React, { useState, ChangeEvent, FormEvent, useCallback } from 'react';
import { RATING_STARS, ReviewSymbolLength } from '../../../const/const';
import { useAppDispatch, useAppSelector } from '../../../hooks/store-hooks';
import { selectPostReviewError, selectPostReviewLoading } from '../../../store/features/reviews-post/selectors';
import { selectCurrentOffer } from '../../../store/features/offer-active/selectors';
import { postReview } from '../../../store/features/reviews-post/thunk-post-review';
import { fetchReviews } from '../../../store/features/reviews/thunk-reviews';

export const ReviewsForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectPostReviewLoading);
  const error = useAppSelector(selectPostReviewError);
  const currentOffer = useAppSelector(selectCurrentOffer);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const isValid = comment.length >= ReviewSymbolLength.MIN && comment.length <= ReviewSymbolLength.MAX && rating > 0;

  const handleTextAreaChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  }, []);

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  }, []);

  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValid && !loading && currentOffer) {
      const reviewData = { id: currentOffer.id, rating, comment };
      await dispatch(postReview(reviewData)).unwrap();
      setComment('');
      setRating(0);
      await dispatch(fetchReviews(currentOffer.id));
    }
  }, [isValid, loading, currentOffer, rating, comment, dispatch]);


  return (
    <form className="reviews__form form" onSubmit={(event) => {
      handleSubmit(event);
    }}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RATING_STARS.map((star) => (
          <React.Fragment key={star}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={star}
              id={`${star}-stars`}
              type="radio"
              onChange={handleInputChange}
              checked={rating === star}
            />
            <label
              htmlFor={`${star}-stars`}
              className="reviews__rating-label form__rating-label"
              title={['terribly', 'badly', 'not bad', 'good', 'perfect'][star - 1]}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleTextAreaChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your
          stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid || loading}
        >
          Submit
        </button>
      </div>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
};
