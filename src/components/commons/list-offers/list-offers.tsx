import { memo } from 'react';
import { OfferType } from '../../../types/offer-preview';
import { Card } from '../card';

type ListOffersProps = {
  offers: OfferType[];
  cardType: 'main' | 'offer';
};

export const ListOffers = memo(({ offers, cardType }: ListOffersProps): JSX.Element => (
  <>
    {offers.map((offer) => (
      <Card
        key={offer.id}
        offer={offer}
        cardType={cardType}
      />
    ))}
  </>
));

ListOffers.displayName = 'ListOffers';
