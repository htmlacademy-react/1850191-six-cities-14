import { Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { OfferGallery } from '../../components/offer/offer-gallery';
import { OfferPlace } from '../../components/offer/offer-place';
import { OfferHost } from '../../components/offer/offer-host';
import { ReviewsForm } from '../../components/offer/reviews-form';
import { OfferMap } from '../../components/offer/offer-map';
import { ListOffersNearby } from '../../components/offer/list-offers-nearby';
import { ReviewsList } from '../../components/offer/reviews-list';

import { OfferType } from '../../types/offer-preview';
import { AppRoute } from '../../const/routes';
import { ReviewType } from '../../types/review-type';


type OfferProps = {
  offers: OfferType[];
  reviews: ReviewType;
};

const Offer = ({ offers, reviews }: OfferProps): JSX.Element => {

  const { id } = useParams();
  const offer = id ? offers.find((item) => item.id === +id) : undefined;

  if (!offer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

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
              < ReviewsList reviews={reviews} />
              <ReviewsForm />
            </section>
          </div>
        </div>
        <OfferMap />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <ListOffersNearby offers={offers} />
          </div>
        </section>
      </div>
    </>
  );
};


export default Offer;
