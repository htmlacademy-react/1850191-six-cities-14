import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/store-hooks';

import { offerLoading, selectCurrentSorting, selectFilteredOffers } from '../../store/features/offers/selectors';
import { Spinner } from '../../components/commons/spinner';
import { CityTabs } from '../../components/main/sity-tabs';
import { Sorting } from '../../components/main/sorting';
import { ListOffers } from '../../components/commons/list-offers';
import { Map } from '../../components/commons/map';
import { MainEmpty } from '../main-empty';

const Main = (): JSX.Element => {

  const offers = useAppSelector(selectFilteredOffers);
  const currentSorting = useAppSelector(selectCurrentSorting);
  const loading = useAppSelector(offerLoading);
  const currentCityData = offers[0]?.city;

  if (loading) {
    return <Spinner />;
  }

  if (offers.length === 0) {
    return <MainEmpty />;
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
            <div className="cities__places-list places__list tabs__content">
              <ListOffers offers={offers} cardType="main" />
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
