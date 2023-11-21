import { useState, KeyboardEvent } from 'react';
import cn from 'classnames';

import { SortingType } from '../../../types/sorting';
import { SortingMap } from '../../../const/routes';
import { useAppDispatch } from '../../../hooks/store-hooks';
import { changeSorting } from '../../../store/features/offers';


type SortingProps = {
  activeSorting: SortingType;
}

export const Sorting = ({ activeSorting }: SortingProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [isOpened, setIsOpened] = useState(false);

  const iconStyle = {
    transform: `translateY(-50%) ${isOpened ? 'rotate(180deg)' : ''}`
  };

  const handleKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape' && isOpened) {
      evt.preventDefault();
      setIsOpened(false);
    }
  };

  const handleTypeClick = () => {
    setIsOpened((prevISOpened) => !prevISOpened);
  };

  const handleSortingItemClick = (type: SortingType) => {
    dispatch(changeSorting(type));
    setIsOpened(false);
  };

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onKeyDown={handleKeyDown}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleTypeClick}>
        {SortingMap[activeSorting]}
        <svg className="places__sorting-arrow" width={7} height={4} style={iconStyle}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={cn('places__options', 'places__options--custom', {
          'places__options--opened': isOpened,
        })}
      >
        {Object.entries(SortingMap).map(([type, label]) => (
          <li
            key={type}
            className={cn('places__option', {
              'places__option--active': activeSorting === type,
            })}
            tabIndex={0}
            onClick={() => handleSortingItemClick(type as SortingType)}
          >
            {label}
          </li>
        ))}
      </ul>

    </form>
  );
};


