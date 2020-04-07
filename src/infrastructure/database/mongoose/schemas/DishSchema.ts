import { Schema } from 'mongoose';

export const DishSchema = new Schema({
    name: String,
    price: Number,
    type: String,
    menuIds: [String]
});
