import React, { useState } from 'react';
import { OfferCard } from '../offer-card';

import { OfferType } from '../../../mocks/offers';

type ListOffersProps = {
  offers: OfferType[];
};

export const ListOffers = ({ offers }: ListOffersProps): JSX.Element => {

  const [activeOffer, setActiveOffer] = useState<OfferType | null>(null);

  const handleOfferHover = (offer: OfferType | null) => {
    setActiveOffer(offer);
  };

  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => handleOfferHover(offer)}
          onMouseLeave={() => handleOfferHover(null)}
        />
      ))}
    </>
  );
};
