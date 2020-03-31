import { Schema } from 'mongoose';

export const MenuItemSchema = new Schema({
    id: String,
    name: String,
    price: Number,
    type: String
});
