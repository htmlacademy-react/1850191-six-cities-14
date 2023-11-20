import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { CityTabs } from '../../components/main/sity-tabs';
import { Sorting } from '../../components/main/sorting';
import { ListOffers } from '../../components/commons/list-offers';
import { Map } from '../../components/commons/map';

import { OfferType } from '../../types/offer-preview';
import { addPluralEnding } from '../../utils/common';

import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';

import { updateOffers } from '../../store/features/offers';
import { fetchOffers } from '../../store/features/offers/thunks';
import { getOffersByCity } from '../../utils/offers';

const Main = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const currentSorting = useAppSelector((state) => state.offers.currentSorting);
  const currentCity = useAppSelector((state) => state.offers.currentCity);
  const offers = useAppSelector((state) => state.offers.offers);
  const [hoveredOfferId, setHoveredOfferId] = useState<OfferType['id'] | null>(null);
  const currentCityData = offers.find((offer) => offer.city.name === currentCity)?.city;
  const offersState = useAppSelector((state) => state.offers);

  useEffect(() => {
    dispatch(updateOffers(currentCity));
  }, [currentCity, dispatch]);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  function handleCardHover(id: OfferType['id'] | null) {
    setHoveredOfferId(id);
  }

  // Получение предложений для текущего города
  const offersInCurrentCity = getOffersByCity(offersState, currentCity);

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
            <b className="places__found">{offersInCurrentCity.length} place{addPluralEnding(offers.length)} to stay in {currentCity}</b>
            <Sorting activeSorting={currentSorting} />
            <div className="cities__places-list places__list tabs__content" style={{ maxHeight: '666px' }}>
              <ListOffers offers={offers} onCardHover={handleCardHover} className="cities__card" />
            </div>
          </section>
          <div className="cities__right-section">
            {currentCityData && <Map city={currentCityData} offers={offers} hoveredOfferId={hoveredOfferId} className="cities__map" />}
          </div>
        </div>
      </div>
    </>

  );
};


export default Main;
