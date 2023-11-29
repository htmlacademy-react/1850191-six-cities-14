import { useEffect, useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { ReviewsForm } from '../../components/offer/reviews-form';
import { ListOffers } from '../../components/commons/list-offers';
import { ReviewsList } from '../../components/offer/reviews-list';
import { Map } from '../../components/commons/map';
import { Spinner } from '../../components/commons/spinner';
import { OfferGallery } from '../../components/offer/offer-gallery';
import { OfferHost } from '../../components/offer/offer-host';
import { OfferPlace } from '../../components/offer/offer-place';

import { AppRoute, AuthorizationStatus } from '../../const/const';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { selectAuthorizationStatus } from '../../store/features/auth/selectors';
import { selectCurrentOffer, selectCurrentOfferLoading } from '../../store/features/offer-active/selectors';
import { selectNearPlacesOffers, selectNearPlacesLoading } from '../../store/features/near-places/selectors';
import { fetchOfferById } from '../../store/features/offer-active/thunk-offer';
import { fetchNearPlaces } from '../../store/features/near-places/thunk-near-places';
import { selectSortedAndLimitedReviews } from '../../store/features/reviews/selectors';
import { fetchReviews } from '../../store/features/reviews/thunk-reviews';
import { AxiosError } from 'axios';

const Offer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const currentOffer = useAppSelector(selectCurrentOffer);
  const loading = useAppSelector(selectCurrentOfferLoading);
  const nearbyOffers = useAppSelector(selectNearPlacesOffers);
  const isNearbyOffersLoading = useAppSelector(selectNearPlacesLoading);
  const sortedAndLimitedReviews = useAppSelector(selectSortedAndLimitedReviews);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isUserAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferById(id)).unwrap()
        .catch((error: AxiosError) => {
          if (error.response && error.response.status === 404) {
            navigate(AppRoute.NotFound);
          }
        });
      dispatch(fetchNearPlaces(id));
      dispatch(fetchReviews(id));
    }
  }, [id, dispatch, navigate]);


  const offersForMap = useMemo(() => {
    let offers = nearbyOffers.slice(0, 3);
    if (currentOffer && !nearbyOffers.some((offer) => offer.id === currentOffer.id)) {
      offers = [currentOffer, ...offers];
    }
    return offers;
  }, [nearbyOffers, currentOffer]);

  if (loading) {
    return <Spinner />;
  }

  if (!currentOffer) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <>
      <Helmet>
        <title>{`6 cities-Offer: ${currentOffer.title}`}</title>
      </Helmet>
      <section className="offer">
        <OfferGallery images={currentOffer.images} />
        <div className="offer__container container">
          <div className="offer__wrapper">
            <OfferPlace
              title={currentOffer.title}
              isPremium={currentOffer.isPremium}
              rating={currentOffer.rating}
              type={currentOffer.type}
              bedrooms={currentOffer.bedrooms}
              maxAdults={currentOffer.maxAdults}
              price={currentOffer.price}
              goods={currentOffer.goods}
            />
            <OfferHost host={currentOffer.host} description={currentOffer.description} />
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">
                Reviews · <span className="reviews__amount">{sortedAndLimitedReviews.length}</span>
              </h2>
              <ReviewsList reviews={sortedAndLimitedReviews} />
              {isUserAuthorized && <ReviewsForm />}
            </section>
          </div>
        </div>
        {currentOffer.city && <Map city={currentOffer.city} offers={offersForMap} className="offer__map" activeOfferId={currentOffer.id} />}
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

