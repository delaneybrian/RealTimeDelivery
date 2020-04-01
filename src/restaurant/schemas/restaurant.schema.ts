import { Schema } from 'mongoose';
import { MenuSummarySchema } from './menuSummary.schema';

export const RestaurantSchema = new Schema({
    id: String,
    name: String,
    address: String,
    location: String,
    type: String,
    meunSummaries: [MenuSummarySchema]
});