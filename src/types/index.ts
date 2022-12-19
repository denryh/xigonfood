export interface IRestaurant {
  id: string;
  name: string;
  category: string;
  rating: number;
  location: {
    street: string;
    district: string;
  };
}
