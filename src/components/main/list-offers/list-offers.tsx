import { useState } from 'react';
import { OfferCard } from '../offer-card';

import { OfferType } from '../../../mocks/offers';

type ListOffersProps = {
  offers: OfferType[];
};

type SetActiveOfferFunction = (offer: OfferType | null) => void;

const createHandleOfferMouseEnter = (setActiveOffer: SetActiveOfferFunction) =>
  (offer: OfferType) =>
    () => {
      // eslint-disable-next-line no-console
      console.log(offer.id);
      setActiveOffer(offer);
    };

const createHandleOfferMouseLeave = (setActiveOffer: SetActiveOfferFunction) =>
  () => {
    setActiveOffer(null);
  };

export const ListOffers = ({ offers }: ListOffersProps): JSX.Element => {

  const [activeOffer, setActiveOffer] = useState<OfferType | null>(null);

  const handleOfferMouseEnter = createHandleOfferMouseEnter(setActiveOffer);
  const handleOfferMouseLeave = createHandleOfferMouseLeave(setActiveOffer);

  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseEnter={createHandleOfferMouseEnter(setActiveOffer)(offer)}
          onMouseLeave={handleOfferMouseLeave}
        />
      ))}
    </>
  );
};
