export interface IPlaceCardProps {
  id?: number;
  imageSrc: string;
  price: number;
  description: string;
  type: string;
  isPremium?: boolean;
  isBookmarked?: boolean;
  rating?: number;
}

export interface ICityData {
  city: string;
  places: IPlaceCardProps[];
}
