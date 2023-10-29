import React, { useState, ChangeEvent } from 'react';
import { ReviewSymbolLength } from '../../../const/routes';

type ReviewFormState = {
  rating: number | null;
  review: string;
};

export const ReviewsForm = (): JSX.Element => {

  const [formState, setFormState] = useState<ReviewFormState>({
    rating: null,
    review: ''
  });

  const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
    const rating = Number(event.target.value);
    setFormState((prevState) => ({ ...prevState, rating }));
  };

  const handleReviewChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const review = event.target.value;
    setFormState((prevState) => ({ ...prevState, review }));
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {[1, 2, 3, 4, 5]?.map((star) => (
          <React.Fragment key={star}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={star.toString()}
              id={`${star}-stars`}
              type="radio"
              onChange={handleRatingChange}
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
        value={formState.review}
        onChange={handleReviewChange}
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
          disabled={formState.rating === null || formState.review.length < ReviewSymbolLength.MIN}
        >
          Submit
        </button>
      </div>
    </form>
  );
};


