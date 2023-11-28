import { memo } from 'react';
import { OfferType } from '../../../types/offer-preview';
import { OfferCard } from '../offer-card';

type ListOffersProps = {
  offers: OfferType[];
  className?: string;
};

export const ListOffers = memo(({ offers, className }: ListOffersProps): JSX.Element => (
  <>
    {offers.map((offer) => (
      <OfferCard
        key={offer.id}
        offer={offer}
        className={className}
      />
    ))}
  </>
));

ListOffers.displayName = 'ListOffers';
