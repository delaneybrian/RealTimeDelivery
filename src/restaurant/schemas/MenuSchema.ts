import { Schema } from 'mongoose';
import { DishSchema } from './DishSchema';

export const MenuSchema = new Schema({
    name: String,
    items: [DishSchema]
});
