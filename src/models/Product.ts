import { Category } from "./Category";

export interface Product {
  key: string,
  name: string,
  description: string,
  price: number,
  quantity: number,
  category: Category,
}
