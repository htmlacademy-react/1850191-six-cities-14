import { useState } from 'react';
import { CityTabs } from '../../components/main/sity-tabs';
import { PlacesSorting } from '../../components/main/places-sorting';
import { Helmet } from 'react-helmet-async';
import { ListOffers } from '../../components/main/list-offers';
import { OfferType } from '../../types/offer-preview';
import { addPluralEnding } from '../../utils/common';
import { Map } from '../../components/main/map';

type MainProps = {
  offers: OfferType[];
};

const Main = ({ offers }: MainProps): JSX.Element => {
  const [hoveredOfferId, setHoveredOfferId] = useState<OfferType['id'] | null>(null);

  function handleCardHover(id: OfferType['id'] | null) {
    setHoveredOfferId(id);
  }

  const city = offers.length > 0 ? offers[0].city : undefined;
  return (

    <>
      <Helmet>
        <title>{'6 cities'}</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <CityTabs />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} place{addPluralEnding(offers.length)} to stay in Amsterdam</b>
            <PlacesSorting />
            <div className="cities__places-list places__list tabs__content">
              <ListOffers offers={offers} onCardHover={handleCardHover} />
            </div>
          </section>
          <div className="cities__right-section">
            {city ? <Map city={city} offers={offers} hoveredOfferId={hoveredOfferId} /> : null}
          </div>
        </div>
      </div>
    </>

  );
};


export default Main;
