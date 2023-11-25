
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ReviewsForm } from '../../components/offer/reviews-form';
import { ListOffers } from '../../components/commons/list-offers';
import { ReviewsList } from '../../components/offer/reviews-list';
import { Map } from '../../components/commons/map';


import { AppRoute, AuthorizationStatus } from '../../const/routes';
import { ReviewType } from '../../types/review-type';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { selectAuthorizationStatus } from '../../store/features/auth/selectors';
import { selectCurrentOffer } from '../../store/features/offer-active/selectors';
import { useEffect } from 'react';
import { fetchOfferById } from '../../store/features/offer-active/thunk-offer';

type OfferProps = {
  reviews: ReviewType;
};

const Offer = ({ reviews }: OfferProps): JSX.Element => {

  // проверка на авторизацию
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isUserAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  const dispatch = useAppDispatch();
  const { id } = useParams();
  const currentOffer = useAppSelector(selectCurrentOffer);

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferById(id));
    }
  }, [id, dispatch]);

  if (!currentOffer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  const { city, title, isPremium, rating, type, bedrooms, maxAdults, price, goods, host, images, description } = currentOffer;
  const ratingPercentage = `${Math.round(rating / 5 * 100)}%`;

  return (
    <>
      <Helmet>
        <title>{`6 cities-Offer: ${title}`}</title>
      </Helmet>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {images.map((image) => (
              <div key={image} className="offer__image-wrapper">
                <img className="offer__image" src={image} alt="Photo studio" />
              </div>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
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
              <li className="offer__feature offer__feature--bedrooms">{bedrooms} Bedrooms</li>
              <li className="offer__feature offer__feature--adults">Max {maxAdults} adults</li>
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
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className={`offer__avatar-wrapper ${host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                  <img className="offer__avatar user__avatar" src={host.avatarUrl} width={74} height={74} alt="Host avatar" />
                </div>
                <span className="offer__user-name">{host.name}</span>
                {host.isPro && <span className="offer__user-status">Pro</span>}
              </div>
              <div className="offer__description">
                <p className="offer__text">{description}</p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">
                Reviews · <span className="reviews__amount">{reviews.length}</span>
              </h2>
              <ReviewsList reviews={reviews} />
              {isUserAuthorized && <ReviewsForm />}
            </section>
          </div>
        </div>
        {city && <Map city={city} offers={[currentOffer]} className="offer__map" />}
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {/* <ListOffers offers={nearbyOffers} className="near-places__card" /> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default Offer;
