import { Schema } from 'mongoose';

export const OrderSchema = new Schema({
    id: String,
    name: String,
    location: String,
    shop: String,
  });