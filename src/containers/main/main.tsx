import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { fetchOffers } from '../../store/features/offers/thunk-offers';
import { selectCurrentSorting, selectFilteredOffers } from '../../store/features/offers/selectors';
import { Spinner } from '../../components/commons/spinner';
import { CityTabs } from '../../components/main/sity-tabs';
import { Sorting } from '../../components/main/sorting';
import { ListOffers } from '../../components/commons/list-offers';
import { Map } from '../../components/commons/map';

const Main = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(selectFilteredOffers);
  const currentSorting = useAppSelector(selectCurrentSorting);
  const loading = useAppSelector((state) => state.offers.loading);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  const currentCityData = offers[0]?.city;

  if (loading) {
    return <Spinner />;
  }

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
            <b className="places__found">{offers.length} place{offers.length !== 1 ? 's' : ''} to stay in {currentCityData?.name}</b>
            <Sorting activeSorting={currentSorting} />
            <div className="cities__places-list places__list tabs__content" style={{ maxHeight: '666px' }}>
              <ListOffers offers={offers} />
            </div>
          </section>
          <div className="cities__right-section">
            {currentCityData && <Map city={currentCityData} offers={offers} className="cities__map" />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
