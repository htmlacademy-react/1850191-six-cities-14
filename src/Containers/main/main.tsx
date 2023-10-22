import { CityTabs } from '../../components/main/sity-tabs/index.ts';
import { PlacesSorting } from '../../components/main/places-sorting/index.ts';
import { PlaceCard } from '../../components/main/place-card/index.ts';
import { CityMap } from '../../components/main/city-map/index.ts';

import { IPlaceCardProps } from '../../types/index.ts';
import placesData from '../../assets/data.json';
import { Helmet } from 'react-helmet-async';


const Main = () => {
  const amsterdamData = placesData.Places.find((place) => place.city === 'Amsterdam');
  const amsterdamPlaces: IPlaceCardProps[] = amsterdamData ? amsterdamData.places : [];

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
            <b className="places__found">312 places to stay in Amsterdam</b>
            <PlacesSorting />
            <div className="cities__places-list places__list tabs__content">
              {amsterdamPlaces.map((place) => (
                <PlaceCard
                  key={place.id}
                  imageSrc={place.imageSrc}
                  price={place.price}
                  description={place.description}
                  type={place.type}
                  isPremium={place.isPremium}
                  rating={place.rating}
                  isBookmarked={place.isBookmarked}
                />
              ))}
            </div>
          </section>
          <CityMap />
        </div>
      </div>
    </>

  );
};
export default Main;
