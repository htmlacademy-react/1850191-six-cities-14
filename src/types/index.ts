export type IPlaceCardProps = {
  id?: number;
  imageSrc: string;
  price: number;
  description: string;
  type: string;
  isPremium?: boolean;
  isBookmarked?: boolean;
  rating?: number;
};

export type ICityData = {
  city: string;
  places: IPlaceCardProps[];
};
