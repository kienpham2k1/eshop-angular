import { Customer } from "./Customer";

export interface Order {
  key: number,
  amount: number,
  dateOrder: Date,
  cuscomer: Customer
}
