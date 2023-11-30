import { memo } from 'react';
import { OfferType } from '../../../types/offer-preview';
import { Cards } from '../cards';


type ListOffersProps = {
  offers: OfferType[];
  cardType: 'main' | 'offer';
};

export const ListOffers = memo(({ offers, cardType }: ListOffersProps): JSX.Element => (
  <>
    {offers.map((offer) => (
      <Cards
        key={offer.id}
        offer={offer}
        cardType={cardType}
      />
    ))}
  </>
));

ListOffers.displayName = 'ListOffers';
