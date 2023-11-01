import { OfferType } from '../../../types/offer-preview';
import { OfferCard } from '../offer-card';

type ListOffersProps = {
  offers: OfferType[];
  onCardHover?: (id: OfferType['id'] | null) => void;
  className?: string;
};

export const ListOffers = ({ offers, onCardHover, className }: ListOffersProps): JSX.Element => (
  <>
    {offers.map((offer) => (
      <OfferCard
        key={offer.id}
        offer={offer}
        onCardHover={onCardHover}
        className={className}
      />
    ))}
  </>
);
