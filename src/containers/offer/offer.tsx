import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { OfferGallery } from '../../components/offer/offer-gallery';
import { OfferPlace } from '../../components/offer/offer-place';
import { OfferHost } from '../../components/offer/offer-host';
import { ReviewsForm } from '../../components/offer/reviews-form';
import { ListOffers } from '../../components/commons/list-offers';
import { ReviewsList } from '../../components/offer/reviews-list';
import { Map } from '../../components/commons/map';


import { AppRoute } from '../../const/routes';
import { ReviewType } from '../../types/review-type';
import { selectOffers } from '../../store/features/offers/selectors';

type OfferProps = {
  reviews: ReviewType;
};

const Offer = ({ reviews }: OfferProps): JSX.Element => {
  const [hoveredOfferId, setHoveredOfferId] = useState<string | null>(null);
  const offers = useSelector(selectOffers);

  const { id } = useParams();
  const offer = id ? offers.find((item) => item.id === id) : undefined;

  function handleCardHover(hoverId: string | null) {
    setHoveredOfferId(hoverId);
  }

  if (!offer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  const city = offer.city;

  return (
    <>
      <Helmet>
        <title>{'6 cities-Offer'}</title>
      </Helmet>
      <section className="offer">
        <OfferGallery />
        <div className="offer__container container">
          <div className="offer__wrapper">
            <OfferPlace />
            <OfferHost />
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">
                Reviews · <span className="reviews__amount">{reviews.length}</span>
              </h2>
              <ReviewsList reviews={reviews} />
              <ReviewsForm />
            </section>
          </div>
        </div>
        {city && <Map city={city} offers={offers} hoveredOfferId={hoveredOfferId} className="offer__map" />}
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <ListOffers offers={offers.slice(0, 3)} onCardHover={handleCardHover} className="near-places__card" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Offer;
