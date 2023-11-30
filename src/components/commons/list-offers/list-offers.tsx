import { memo } from 'react';
import { OfferType } from '../../../types/offer-preview';
import { Cards } from '../cards';


type ListOffersProps = {
  offers: OfferType[];
};

export const ListOffers = memo(({ offers }: ListOffersProps): JSX.Element => (
  <>
    {offers.map((offer) => (
      <Cards
        key={offer.id}
        offer={offer}
        cardType="offer"
      />
    ))}
  </>
));

ListOffers.displayName = 'ListOffers';
