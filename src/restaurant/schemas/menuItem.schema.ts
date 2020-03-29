import * as mongoose from 'mongoose';

export const MenuItemSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    type: String
});