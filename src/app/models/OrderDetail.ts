import { Order } from "./Order"
import { Product } from "./Product"

export interface OrderDetail {
  key: string,
  product: Product,
  quantity: number,
  amount: number
  order: Order
}
