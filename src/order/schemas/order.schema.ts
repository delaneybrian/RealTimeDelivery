import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
    id: String,
    name: String,
    location: String,
    shop: String,
  });