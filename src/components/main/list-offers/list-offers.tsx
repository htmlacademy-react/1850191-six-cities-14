import { useState } from 'react';
import { OfferCard } from '../offer-card';
import { OfferType } from '../../../types/offer-preview';

type ListOffersProps = {
  offers: OfferType[];
};

export const ListOffers = ({ offers }: ListOffersProps): JSX.Element => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hoveredOfferId, setHoveredOfferId] = useState<OfferType['id'] | null>(null);

  function handleCardHover(id: OfferType['id'] | null) {
    setHoveredOfferId(id);
  }

  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onCardHover={handleCardHover}
        />
      ))}
    </>
  );
};
