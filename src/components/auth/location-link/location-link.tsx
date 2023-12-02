import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cityChange } from '../../../store/features/offers';
import { CityName, cityList, } from '../../../const/const';

export const LocationLink = (): JSX.Element => {
  const dispatch = useDispatch();
  const randomCity = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * cityList.length);
    return cityList[randomIndex];
  }, []);

  const handleCityChange = () => {
    dispatch(cityChange(randomCity as CityName));
  };

  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <Link to="/" className="locations__item-link" onClick={handleCityChange}>
          <span>{randomCity}</span>
        </Link>
      </div>
    </section>
  );
};
