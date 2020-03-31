import { Schema } from 'mongoose';

export const RestaurantSchema = new Schema({
    id: String,
    name: String,
    location: String,
    type: String,
    menusIds: [String]
});