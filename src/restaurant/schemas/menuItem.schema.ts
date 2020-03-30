import { Schema } from 'mongoose';

export const MenuItemSchema = new Schema({
    id: Number,
    name: String,
    price: Number,
    type: String
});
