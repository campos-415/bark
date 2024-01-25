export interface Product {
  id: string
  category: string
  name: string
  price: string
  images:string[]
}
export interface ReviewProps {
  id: number;
  name: string;
  image: string;
  review: string;
  stars: number;
  date: string;
  readMore: boolean;
}