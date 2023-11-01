import { Reviewer } from './reviewer';

export type Review = {
  id: number;
  user: Reviewer;
  rating: number;
  comment: string;
  date: string;
};
