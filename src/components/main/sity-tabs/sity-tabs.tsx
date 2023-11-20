import { useAppDispatch, useAppSelector } from '../../../hooks/store-hooks';
import { changeCity } from '../../../store/features/offers';
import { fetchOffersByCity } from '../../../store/features/offers/thunks';
import { getCities } from '../../../utils/offers';


export const CityTabs = (): JSX.Element => {
  const cities = useAppSelector(getCities);
  const currentCity = useAppSelector((state): string => state.offers.currentCity);
  const dispatch = useAppDispatch();

  const handleCityChange = (city: string) => {
    dispatch(changeCity(city));
    dispatch(fetchOffersByCity(city));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => {
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

