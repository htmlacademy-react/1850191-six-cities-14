import { OfferType } from '../../../types/offer-preview';
import { OfferCardNearby } from '../offer-card-nearby';


type ListOffersNearbyProps = {
  offers: OfferType[];
};

export const ListOffersNearby = ({ offers }: ListOffersNearbyProps): JSX.Element => (
  <>
    {offers.slice(0, 3).map((offer) => (
      <OfferCardNearby key={offer.id} offer={offer} />
    ))}
  </>
);
