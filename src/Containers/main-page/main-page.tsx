import CityMap from '../../Components/Main/city-map/city-map.tsx';
import PlaceCard from '../../Components/Main/place-card/place-card.tsx';
import PlacesSorting from '../../Components/Main/places-sorting/places__sorting.tsx';
import CityTabs from '../../Components/Main/sity-tabs/sity-tabs.tsx';

const MainPage = () => {
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
              <PlaceCard
                imageSrc="img/apartment-01.jpg"
                price={120}
                description="Beautiful & luxurious apartment at great location"
                type="Apartment"
                isPremium
                rating={4.7}
              />
              <PlaceCard
                imageSrc="img/room.jpg"
                price={80}
                description="Wood and stone place"
                type="Private room"
                isBookmarked
                rating={4}
              />
              <PlaceCard
                imageSrc="img/apartment-02.jpg"
                price={132}
                description="Canal View Prinsengracht"
                type="Apartment"
                rating={4}
              />
              <PlaceCard
                imageSrc="img/apartment-03.jpg"
                price={180}
                description="Nice, cozy, warm big bed apartment"
                type="Apartment"
                isPremium
                rating={5}
              />
              <PlaceCard
                imageSrc="img/room.jpg"
                price={80}
                description="Wood and stone place"
                type="Private room"
                isBookmarked
                rating={4}
              />
            </div>
          </section>
          <CityMap />
        </div>
      </div>
    </>

  );
};

export default MainPage;
