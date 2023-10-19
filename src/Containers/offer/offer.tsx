import { ReviewsForm } from '../../components/commons/reviews-form/reviews-form';
import { ReviewsItem } from '../../components/commons/reviews-item/reviews-item';
import { OfferCard } from '../../components/offer/offer-card/offer-card';
import { OfferGallery } from '../../components/offer/offer-gallery/offer-gallery';
import { OfferHost } from '../../components/offer/offer-host/offer-host';
import { OfferMap } from '../../components/offer/offer-map/offer-map';
import { OfferPlace } from '../../components/offer/offer-place/offer-place';
import { ICityData, IPlaceCardProps } from '../../types/index';
import data from '../../assets/data.json';

const Offer = () => {

  const amsterdamPlaceData = data.Places.find((place: ICityData) => place.city === 'Amsterdam');
  const amsterdamPlaces: IPlaceCardProps[] = amsterdamPlaceData?.places ?? [];
  const threePlaces: IPlaceCardProps[] = amsterdamPlaces.slice(0, 3);

  return (
    <>
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
            {threePlaces.map((place) => (
              <OfferCard key={place.id} {...place} />
            ))}
          </div>
        </section>
      </div>
    </>

  );
};

export default Offer;
