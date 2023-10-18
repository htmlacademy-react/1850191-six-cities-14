

import { CityTabs } from '../../Components/Main/sity-tabs/sity-tabs.tsx';
import { PlacesSorting } from '../../Components/Main/places-sorting/places-sorting.tsx';
import { PlaceCard } from '../../Components/Main/place-card/place-card.tsx';
import { CityMap } from '../../Components/Main/city-map/city-map.tsx';

import { IPlaceCardProps } from '../../types/index.ts';
import placesData from '../../assets/data.json';


const Main = () => {
  const amsterdamData = placesData.Places.find((place) => place.city === 'Amsterdam');
  const amsterdamPlaces: IPlaceCardProps[] = amsterdamData ? amsterdamData.places : [];

  return (
    <>
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
