import { type StaticImageData } from "next/image";

export interface IRestaurant {
  id: string;
  featureUrl: string | StaticImageData;
  name: string;
  category: string;
  signature: string;
  rating: number;
  range: [number, number];
  location: {
    district: string;
    street: string;
  };
}
