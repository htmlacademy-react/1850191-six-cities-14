import { createAction } from '@reduxjs/toolkit';
import { SortingType } from '../types/sorting';

export const changeCity = createAction('offers/changeCity', (value: string) => ({
  payload: value,
}));

export const updateOffers = createAction('offers/update', (value: string) => ({
  payload: value,
}));

export const changeSorting = createAction('offers/changeSorting', (value: SortingType) => ({
  payload: value,
}));
