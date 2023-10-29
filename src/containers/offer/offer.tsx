import { OfferGallery } from '../../components/offer/offer-gallery';
import { OfferPlace } from '../../components/offer/offer-place';
import { OfferHost } from '../../components/offer/offer-host';
import { ReviewsItem } from '../../components/commons/reviews-item';
import { ReviewsForm } from '../../components/commons/reviews-form';
import { OfferMap } from '../../components/offer/offer-map';

import { Helmet } from 'react-helmet-async';
import { OfferType } from '../../types/offer-preview';
import { OfferDistrictCardList } from '../../components/offer/offer-district-card-list';
import { Navigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../const/routes';

type OfferProps = {
  offers: OfferType[];
};

const Offer = ({ offers }: OfferProps): JSX.Element => {

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
                Reviews · <span className="reviews__amount">1</span>
              </h2>
              <ul className="reviews__list">
                <ReviewsItem />
              </ul>
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
            <OfferDistrictCardList offers={offers} />
          </div>
        </section>
      </div>
    </>
  );
};


export default Offer;
