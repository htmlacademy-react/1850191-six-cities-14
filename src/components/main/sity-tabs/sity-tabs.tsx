import { memo, useCallback } from 'react';
import { CityName } from '../../../const/const';
import { useAppDispatch, useAppSelector } from '../../../hooks/use-store-hooks';
import { cityChange } from '../../../store/features/offers';
import { getCities } from '../../../utils/offers';
import { selectCurrentCity } from '../../../store/features/offers/selectors';

export const CityTabs = memo((): JSX.Element => {
  const cities = useAppSelector(getCities);
  const currentCity = useAppSelector(selectCurrentCity);
  const dispatch = useAppDispatch();

  const handleCityChange = useCallback((city: CityName) => {
    dispatch(cityChange(city));
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
