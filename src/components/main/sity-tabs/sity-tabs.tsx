import { memo, useCallback } from 'react';
import { CityName } from '../../../const/const';
import { useAppDispatch, useAppSelector } from '../../../hooks/store-hooks';
import { changeCity } from '../../../store/features/offers';
import { getCities } from '../../../utils/offers';


export const CityTabs = memo((): JSX.Element => {
  const cities = useAppSelector(getCities);
  const currentCity = useAppSelector((state): CityName => state.offers.currentCity);
  const dispatch = useAppDispatch();

  const handleCityChange = useCallback((city: CityName) => {
    dispatch(changeCity(city));
  }, [dispatch]);

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
});

CityTabs.displayName = 'CityTabs';
