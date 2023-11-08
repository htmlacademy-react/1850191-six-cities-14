import { useAppDispatch, useAppSelector } from '../../../hooks/store-hooks';
import { changeCity } from '../../../store/actions';

type CityTabsProps = {
  locations: string[];
};

export const CityTabs = ({ locations }: CityTabsProps): JSX.Element => {

  const currentCity = useAppSelector((state) => state.currentCity);
  const dispatch = useAppDispatch();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locations.map((city) => {
            const isActive = (city === currentCity);

            return (
              <li key={city} className="locations__item">
                <a
                  className={`
                    locations__item-link
                    tabs__item
                    ${isActive ? 'tabs__item--active' : ''}
                  `}
                  href={`#${city}`}
                  onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(changeCity(city));
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

