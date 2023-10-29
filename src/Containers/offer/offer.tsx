import { OfferGallery } from '../../components/offer/offer-gallery';
import { OfferPlace } from '../../components/offer/offer-place';
import { OfferHost } from '../../components/offer/offer-host';
import { ReviewsItem } from '../../components/commons/reviews-item';
import { ReviewsForm } from '../../components/commons/reviews-form';
import { OfferMap } from '../../components/offer/offer-map';
import { OfferCard } from '../../components/offer/offer-card';

import { ICityData, IPlaceCardProps } from '../../types/index';
import data from '../../mocks/data.json';
import { Helmet } from 'react-helmet-async';

const Offer = (): JSX.Element => {

  const amsterdamPlaceData = data.Places.find((place: ICityData) => place.city === 'Amsterdam');
  const amsterdamPlaces: IPlaceCardProps[] = amsterdamPlaceData?.places ?? [];
  const threePlaces: IPlaceCardProps[] = amsterdamPlaces.slice(0, 3);

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
            {threePlaces?.map((place) => (
              <OfferCard key={place.id} {...place} />
            ))}
          </div>
        </section>
      </div>
    </>

  );
};

export default Offer;
