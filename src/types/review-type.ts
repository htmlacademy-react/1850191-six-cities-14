export type Reviewer = {
  id: string;
  isPro: boolean;
  name: string;
  avatarUrl: string;
};

export type Review = {
  id: string;
  user: Reviewer;
  rating: number;
  comment: string;
  date: string;
};

export type ReviewType = Review[];
