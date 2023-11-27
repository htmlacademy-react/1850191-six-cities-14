import { useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { ReviewsForm } from '../../components/offer/reviews-form';
import { ListOffers } from '../../components/commons/list-offers';
import { ReviewsList } from '../../components/offer/reviews-list';
import { Map } from '../../components/commons/map';
import { Spinner } from '../../components/commons/spinner';

import { AppRoute, AuthorizationStatus } from '../../const/routes';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { selectAuthorizationStatus } from '../../store/features/auth/selectors';
import { selectCurrentOffer, selectCurrentOfferLoading } from '../../store/features/offer-active/selectors';
import { selectNearPlacesOffers, selectNearPlacesLoading } from '../../store/features/near-places/selectors';
import { fetchOfferById } from '../../store/features/offer-active/thunk-offer';
import { fetchNearPlaces } from '../../store/features/near-places/thunk-near-places';
import { OfferGallery } from '../../components/offer/offer-gallery';
import { OfferHost } from '../../components/offer/offer-host';
import { OfferPlace } from '../../components/offer/offer-place';
import { selectSortedAndLimitedReviews } from '../../store/features/reviews/selectors';
import { fetchReviews } from '../../store/features/reviews/thunk-reviews';


const Offer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const currentOffer = useAppSelector(selectCurrentOffer);
  const loading = useAppSelector(selectCurrentOfferLoading);
  const nearbyOffers = useAppSelector(selectNearPlacesOffers);
  const isNearbyOffersLoading = useAppSelector(selectNearPlacesLoading);
  const sortedAndLimitedReviews = useAppSelector(selectSortedAndLimitedReviews);

  /** проверка на авторизацию */
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isUserAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferById(id)).unwrap().catch(() => {
        navigate(AppRoute.NotFound);
      });
      dispatch(fetchNearPlaces(id));
      dispatch(fetchReviews(id));
    }
  }, [id, dispatch, navigate]);

  if (loading) {
    return <Spinner />;
  }

  if (!currentOffer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  const { city, title, isPremium, rating, type, bedrooms, maxAdults, price, goods, host, images, description } = currentOffer;

  return (
    <>
      <Helmet>
        <title>{`6 cities-Offer: ${title}`}</title>
      </Helmet>
      <section className="offer">
        < OfferGallery images={images} />
        <div className="offer__container container">
          <div className="offer__wrapper">
            <OfferPlace title={title} isPremium={isPremium} rating={rating} type={type}
              bedrooms={bedrooms}
              maxAdults={maxAdults}
              price={price}
              goods={goods}
            />
            <OfferHost host={host} description={description} />
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">
                Reviews · <span className="reviews__amount">{sortedAndLimitedReviews.length}</span>
              </h2>
              <ReviewsList reviews={sortedAndLimitedReviews} />
              {isUserAuthorized && <ReviewsForm />}
            </section>
          </div>
        </div>
        {city && <Map city={city} offers={nearbyOffers.slice(0, 3)} className="offer__map" />}
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {isNearbyOffersLoading ? (
              <div>Loading nearby places...</div>
            ) : (
              <ListOffers offers={nearbyOffers.slice(0, 3)} className="near-places__card" />
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Offer;
