import { OfferType } from '../../../types/offer-preview';
import { OfferDistrictCard } from '../offer-district-card/offer-district-card';

type OfferDistrictCardListProps = {
  offers: OfferType[];
};

export const OfferDistrictCardList = ({ offers }: OfferDistrictCardListProps): JSX.Element => (
  <>
    {offers.slice(0, 3).map((offer) => (
      <OfferDistrictCard key={offer.id} offer={offer} />
    ))}
  </>
);
