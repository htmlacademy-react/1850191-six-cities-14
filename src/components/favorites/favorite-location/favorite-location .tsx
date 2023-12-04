import { useMemo } from 'react';
import { OfferType } from '../../../types/offer-preview';
import { Card } from '../../commons/card';

type FavoriteLocationProps = {
  offers: OfferType[];
};

export const FavoriteLocation = ({ offers }: FavoriteLocationProps): JSX.Element => {

  const groupedOffers = useMemo(() => offers.reduce((acc: { [key: string]: OfferType[] }, offer: OfferType) => {
    const cityName = offer.city.name;
    if (!acc[cityName]) {
      acc[cityName] = [];
    }
    acc[cityName].push(offer);
    return acc;
  }, {} as { [key: string]: OfferType[] }), [offers]);

  return (
    <ul className="favorites__list">
      {Object.entries(groupedOffers).map(([cityName, cityOffers]) => (
        <li key={cityName} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{cityName}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {cityOffers.map((offer) => (
              <Card
                key={offer.id}
                offer={offer}
                cardType="favorite"
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FavoriteLocation;
