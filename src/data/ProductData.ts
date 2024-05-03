
import { Product } from "../app/models/Product";
import { categoryData } from "./CategoryData";

export const productData: Product[] = [
  {
    key: "prd1",
    name: "product 1",
    description: "product 1",
    price: 1.0,
    quantity: 12,
    category: categoryData[1],
  }, {
    key: "prd2",
    name: "product 2",
    description: "product 2",
    price: 2.344,
    quantity: 22,
    category: categoryData[2],
  }, {
    key: "prd3",
    name: "product 3",
    description: "product 3",
    price: 5.0,
    quantity: 32,
    category: categoryData[3],
  }
]
