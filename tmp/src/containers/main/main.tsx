import { CityTabs } from '../../components/main/sity-tabs';
import { PlacesSorting } from '../../components/main/places-sorting';
import { CityMap } from '../../components/main/city-map';
import { Helmet } from 'react-helmet-async';
import { ListOffers } from '../../components/main/list-offers';

import { OfferType } from '../../mocks/offers';


type MainProps = {
  offers: OfferType[];
};

const Main = ({ offers }: MainProps): JSX.Element => (
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
          <b className="places__found">312 places to stay in Amsterdam</b>
          <PlacesSorting />
          <div className="cities__places-list places__list tabs__content">
            <ListOffers offers={offers} />
          </div>
        </section>
        <CityMap />
      </div>
    </div>
  </>

);
export default Main;
