import { OfferCard } from '../offer-card';
import { OfferType } from '../../../types/offer-preview';

type ListOffersProps = {
  offers: OfferType[];
  onCardHover?: (id: OfferType['id'] | null) => void;
};

export const ListOffers = ({ offers, onCardHover }: ListOffersProps): JSX.Element => (
  <>
    {offers.map((offer) => (
      <OfferCard
        key={offer.id}
        offer={offer}
        onCardHover={onCardHover}
      />
    ))}
  </>
);
