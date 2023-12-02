import { useState, KeyboardEvent, useCallback, memo } from 'react';
import cn from 'classnames';

import { SortingType } from '../../../types/sorting';
import { SortingMap } from '../../../const/const';
import { useAppDispatch } from '../../../hooks/use-store-hooks';
import { currentSorting } from '../../../store/features/offers';

type SortingProps = {
  activeSorting: SortingType;
}

export const Sorting = memo(({ activeSorting }: SortingProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [isOpened, setIsOpened] = useState(false);

  const iconStyle = {
    transform: `translateY(-50%) ${isOpened ? 'rotate(180deg)' : ''}`
  };

  const handleKeyDown = useCallback((evt: KeyboardEvent) => {
    if (evt.key === 'Escape' && isOpened) {
      evt.preventDefault();
      setIsOpened(false);
    }
  }, [isOpened]);

  const handleTypeClick = useCallback(() => {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  }, []);

  const handleSortingItemClick = useCallback((type: SortingType) => {
    dispatch(currentSorting(type));
    setIsOpened(false);
  }, [dispatch]);

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
});

Sorting.displayName = 'Sorting';

