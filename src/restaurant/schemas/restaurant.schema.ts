import * as mongoose from 'mongoose';
import { MenuItemSchema } from './menuItem.schema';

export const RestaurantSchema = new mongoose.Model({
    id: Number,
    address: String,
    lat: Number,
    lng: Number,
    type: String,
    //menu: MenuItemSchema[]
});