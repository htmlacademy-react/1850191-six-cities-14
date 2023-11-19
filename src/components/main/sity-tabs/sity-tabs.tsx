import { CityName } from '../../../const/routes';
import { useAppDispatch, useAppSelector } from '../../../hooks/store-hooks';
import { changeCity, fetchOffersByCity } from '../../../store/features/offers';


type CityTabsProps = {
  locations: CityName[];
};

export const CityTabs = ({ locations }: CityTabsProps): JSX.Element => {
  const currentCity = useAppSelector((state) => state.offers.currentCity);
  const dispatch = useAppDispatch();

  const handleCityChange = (city: CityName) => {
    dispatch(changeCity(city));
    dispatch(fetchOffersByCity(city));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locations.map((city) => {
            const isActive = city === currentCity;

            return (
              <li key={city} className="locations__item">
                <a
                  className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
                  href={`#${city}`}
                  onClick={(evt) => {
                    evt.preventDefault();
                    handleCityChange(city);
                  }}
                >
                  <span>{city}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
