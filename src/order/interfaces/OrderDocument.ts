import { Order } from './Order';
import { Document } from 'mongoose';

export interface OrderDocument extends Document, Order {
  id: string,
  name: string,
  location: string,
  shop: string,
}